import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsAzureblob = {
  AzureBlob: "azure_blob",
} as const;
export type TypeOptionsAzureblob =
  | (typeof TypeOptionsAzureblob)[keyof typeof TypeOptionsAzureblob]
  | (string & {});

export const typeOptionsAzureblobSchema: EnumSchema<TypeOptionsAzureblob> =
  s.enumOf<TypeOptionsAzureblob>(TypeOptionsAzureblob);
