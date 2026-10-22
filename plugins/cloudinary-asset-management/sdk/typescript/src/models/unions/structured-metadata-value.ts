import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StructuredMetadataValue = string | number | string[];

export const structuredMetadataValueSchema: Schema<StructuredMetadataValue> = s.of<StructuredMetadataValue>(
  s.union([s.string(), s.int(), s.array(s.string())]),
);
