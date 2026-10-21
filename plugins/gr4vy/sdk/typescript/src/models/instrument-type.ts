import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InstrumentType = {
  Pan: "pan",
  CardToken: "card_token",
  Redirect: "redirect",
  RedirectToken: "redirect_token",
  Googlepay: "googlepay",
  Applepay: "applepay",
  NetworkToken: "network_token",
  Plaid: "plaid",
  Bank: "bank",
} as const;
export type InstrumentType = (typeof InstrumentType)[keyof typeof InstrumentType] | (string & {});

export const instrumentTypeSchema: EnumSchema<InstrumentType> = s.enumOf<InstrumentType>(InstrumentType);
