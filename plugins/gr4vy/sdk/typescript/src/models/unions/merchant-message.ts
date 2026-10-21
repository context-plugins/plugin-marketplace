import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A message from the merchant. */
export type MerchantMessage = string;

export const merchantMessageSchema: Schema<MerchantMessage> = s.of<MerchantMessage>(s.union([s.string()]));
