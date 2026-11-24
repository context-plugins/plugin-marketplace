import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXTransactionsApi = {
  Transaction: "transaction",
} as const;
export type EntityRazorpayXTransactionsApi =
  | (typeof EntityRazorpayXTransactionsApi)[keyof typeof EntityRazorpayXTransactionsApi]
  | (string & {});

export const entityRazorpayXTransactionsApiSchema: EnumSchema<EntityRazorpayXTransactionsApi> =
  s.enumOf<EntityRazorpayXTransactionsApi>(EntityRazorpayXTransactionsApi);
