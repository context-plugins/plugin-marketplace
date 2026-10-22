import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { structuredMetadataValueSchema, type StructuredMetadataValue } from "./structured-metadata-value.js";

/**
 * A pipe-separated list or a map of custom metadata fields (by external_id) and the values to
 * assign to each of them. The = " and | characters can be supported as values when escaped with a
 * prepended backslash (\). For a multi-select field, you can set a maximum of 3000 different
 * metadata values on an asset.
 */
export type StructuredMetadataParam = string | Record<string, StructuredMetadataValue>;

export const structuredMetadataParamSchema: Schema<StructuredMetadataParam> = s.of<StructuredMetadataParam>(
  s.union([
    s.string(),
    s.record(
      s.string(),
      s.lazy(() => structuredMetadataValueSchema),
    ),
  ]),
);
