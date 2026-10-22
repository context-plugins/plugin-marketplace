import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DigitalWalletProvider = {
  Apple: "apple",
  Google: "google",
  ClickToPay: "click-to-pay",
  Paze: "paze",
} as const;
export type DigitalWalletProvider =
  | (typeof DigitalWalletProvider)[keyof typeof DigitalWalletProvider]
  | (string & {});

export const digitalWalletProviderSchema: EnumSchema<DigitalWalletProvider> =
  s.enumOf<DigitalWalletProvider>(DigitalWalletProvider);
