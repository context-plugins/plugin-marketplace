import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of merchant defined data to be passed to the Cybersource. Each key needs to be a numeric
 * string.
 */
export type MerchantDefinedInformation = Record<string, string>;

export const merchantDefinedInformationSchema: Schema<MerchantDefinedInformation> =
  s.of<MerchantDefinedInformation>(s.union([s.record(s.string(), s.string())]));
