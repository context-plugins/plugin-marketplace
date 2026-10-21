import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of merchant defined data to be passed to the Cybersource Decision Manager API. Each key
 * needs to be a numeric string.
 */
export type MerchantDefinedData = Record<string, string>;

export const merchantDefinedDataSchema: Schema<MerchantDefinedData> = s.of<MerchantDefinedData>(
  s.union([s.record(s.string(), s.string())]),
);
