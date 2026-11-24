import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataClassification = {
  Public: "public",
  Internal: "internal",
  Confidential: "confidential",
  Restricted: "restricted",
} as const;
export type DataClassification = (typeof DataClassification)[keyof typeof DataClassification] | (string & {});

export const dataClassificationSchema: EnumSchema<DataClassification> =
  s.enumOf<DataClassification>(DataClassification);
