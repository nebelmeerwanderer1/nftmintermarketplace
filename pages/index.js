//import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox-index"
import networkMapping from "../constants/networkMapping.json"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"
import { jsx, Container, Box, Grid, Text, Heading } from "theme-ui";
import TextFeature from "../components/text-feature";


export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl ">Recently Listed</h1>
            <div className="grid grid-cols-2">
            <div className="flex flex-wrap mt-10 ml-5">
                {/* {isWeb3Enabled ? ( */}
                    {loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            console.log(nft)
                            const { price, nftAddress, tokenId, seller } = nft
                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            )
                        })
                    )}
                {/* ) : (
                     <div>Web3 Currently Not Enabled - it sure ain't</div>
                )} */}
            </div>
            <div className=" flex-wrap mt-10 mr-10 ml-10 bg-slate-100">
              <h1 className="py-4 px-4 font-bold text-xl ">what is actually happening here?</h1>

              <h1 className="py-4 px-4 ">this web site is designed to explain what happens beneath the hood when you mint nfts, list for sale and buy nft from others. </h1>

              <h1 className="py-4 px-4 ">it is genuinely blockchain based if someone asks: it runs on the ethereum's goerli testnet and the nfts follow the ERC-721 standard</h1>
              
              <h1 className="py-4 px-4 ">to the left you have nfts that exist on the blockchain and are listed for sale on the marketplace </h1>

              <h1 className="py-4 px-4 ">creating an nft is called 'minting'. that means activating a smart contract that can create a unique token - the smart contract maintains a list of all the nfts and owner accounts</h1>
              
              <h1 className="py-4 px-4 ">so before you can mint an nft you need an account. download a wallet to get an account. For instance metamask.</h1>
              
              <h1 className="py-4 px-4 ">you will also need a bit of ETH - since this is a testnet it is really just funny money. you only need real ETH if it is on ethereum mainnet</h1>
              
              <h1 className="py-4 px-4 ">you can get some goerli eth here : https://goerli-faucet.pk910.de/ . but get an account first. </h1>
                 
              
              
              
              
              
              
              
              
            </div>

            </div>
            
            
        </div>
    )
}


const styles = {
  coreFeature: {
    mt: [5, 5, 5, 5, 5, 5],
    py: [0, null, null, 2, null, 7],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 550, 1000],
    mr: [2, 2, 2, 2, 2, 2],
    pr: [0, null, "auto", null, null, 0],
    pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
