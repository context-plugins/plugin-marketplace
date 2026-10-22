import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether the transaction was initiated by the merchant (true) or customer (false). */
export type MerchantInitiated = boolean;

export const merchantInitiatedSchema: Schema<MerchantInitiated> = s.of<MerchantInitiated>(
  s.union([s.boolean()]),
);
