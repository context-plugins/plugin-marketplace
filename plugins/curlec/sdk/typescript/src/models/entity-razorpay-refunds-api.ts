import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayRefundsApi = {
  Refund: "refund",
} as const;
export type EntityRazorpayRefundsApi =
  | (typeof EntityRazorpayRefundsApi)[keyof typeof EntityRazorpayRefundsApi]
  | (string & {});

export const entityRazorpayRefundsApiSchema: EnumSchema<EntityRazorpayRefundsApi> =
  s.enumOf<EntityRazorpayRefundsApi>(EntityRazorpayRefundsApi);
