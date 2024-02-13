import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.alquranweb.bn",
  appName: "Cashier X",
  webDir: "dist",
  server: {
    url: "http://192.168.1.13:5173",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
