import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the transaction is merchant-initiated */
export type MerchantInitiated3 = boolean;

export const merchantInitiated3Schema: Schema<MerchantInitiated3> = s.of<MerchantInitiated3>(
  s.union([s.boolean()]),
);
