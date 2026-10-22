import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The merchant ID to use for this transaction. This requires a meta key to be set up for use with
 * Cybersource Decision Manager, and this overrides the connector configuration.
 */
export type MetaKeyMerchantId = string;

export const metaKeyMerchantIdSchema: Schema<MetaKeyMerchantId> = s.of<MetaKeyMerchantId>(
  s.union([s.string()]),
);
