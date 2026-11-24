import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
 * permission to decrypt the definition. Alternatively, you can call the API with includedData =
 * METADATA_ONLY to get a successful response without the encrypted definition.
 */
export const IncludedData1 = {
  AllData: "ALL_DATA",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type IncludedData1 = (typeof IncludedData1)[keyof typeof IncludedData1] | (string & {});

export const includedData1Schema: EnumSchema<IncludedData1> = s.enumOf<IncludedData1>(IncludedData1);
