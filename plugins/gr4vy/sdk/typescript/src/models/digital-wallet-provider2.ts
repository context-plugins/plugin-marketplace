import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the digital wallet provider. */
export const DigitalWalletProvider2 = {
  Apple: "apple",
  Google: "google",
  ClickToPay: "click-to-pay",
  Paze: "paze",
} as const;
export type DigitalWalletProvider2 =
  | (typeof DigitalWalletProvider2)[keyof typeof DigitalWalletProvider2]
  | (string & {});

export const digitalWalletProvider2Schema: EnumSchema<DigitalWalletProvider2> =
  s.enumOf<DigitalWalletProvider2>(DigitalWalletProvider2);
