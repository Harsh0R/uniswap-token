import React from "react";
import "../styles/globals.css";

import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({
      apiKey: "f0267a8d7d5642caa8735db53507eefd",
      // apiKey: "2Y299sur10MnKO1WhEruCpWjikK",
      priority: 1,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    // <div>Hey</div>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
