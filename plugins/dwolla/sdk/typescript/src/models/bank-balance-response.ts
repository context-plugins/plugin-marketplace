import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableSchema, type Available } from "./available.js";
import { closingSchema, type Closing } from "./closing.js";
import { links31Schema, type Links31 } from "./links31.js";

/** Response for retrieving balance of a bank account verified through Open Banking */
export type BankBalanceResponse = {
  links: Links31;
  available: Available;
  closing: Closing;
  lastUpdated: string;
};

export const bankBalanceResponseSchema: Schema<BankBalanceResponse> = s.object<BankBalanceResponse>({
  links: links31Schema,
  available: availableSchema,
  closing: closingSchema,
  lastUpdated: s.string(),
  _keysMap: {
    links: "_links",
  },
});
