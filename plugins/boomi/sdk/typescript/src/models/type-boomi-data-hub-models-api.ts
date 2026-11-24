import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data type of the field. */
export const TypeBoomiDataHubModelsApi = {
  String: "STRING",
  Integer: "INTEGER",
  Float: "FLOAT",
  Boolean: "BOOLEAN",
  Date: "DATE",
  Datetime: "DATETIME",
  Reference: "REFERENCE",
} as const;
export type TypeBoomiDataHubModelsApi =
  | (typeof TypeBoomiDataHubModelsApi)[keyof typeof TypeBoomiDataHubModelsApi]
  | (string & {});

export const typeBoomiDataHubModelsApiSchema: EnumSchema<TypeBoomiDataHubModelsApi> =
  s.enumOf<TypeBoomiDataHubModelsApi>(TypeBoomiDataHubModelsApi);
