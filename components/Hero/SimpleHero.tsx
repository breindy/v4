import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { DotBackground } from "../Background/DotBackground";

export const SimpleHero = () => {
  return <DotBackground />;
};

export default SimpleHero;
