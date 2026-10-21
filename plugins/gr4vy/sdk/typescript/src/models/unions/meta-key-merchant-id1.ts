import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The merchant ID to use for this transaction. This requires a meta key to be set up for use with
 * Cybersource, and this overrides the connector configuration.
 */
export type MetaKeyMerchantId1 = string;

export const metaKeyMerchantId1Schema: Schema<MetaKeyMerchantId1> = s.of<MetaKeyMerchantId1>(
  s.union([s.string()]),
);
