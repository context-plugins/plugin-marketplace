import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt
 * permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with
 * includedData = METADATA_ONLY to get a successful response without the encrypted definition.
 */
export const IncludedData = {
  AllData: "ALL_DATA",
  MetadataOnly: "METADATA_ONLY",
} as const;
export type IncludedData = (typeof IncludedData)[keyof typeof IncludedData] | (string & {});

export const includedDataSchema: EnumSchema<IncludedData> = s.enumOf<IncludedData>(IncludedData);
