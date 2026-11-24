import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compatibility1Schema, type Compatibility1 } from "./compatibility1.js";
import { dimensionMetadata1Schema, type DimensionMetadata1 } from "./dimension-metadata1.js";

/** The compatibility for a single dimension. */
export type DimensionCompatibility = {
  /**
   * The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be
   * successfully added to the report.
   */
  compatibility?: Compatibility1;
  /**
   * The dimension metadata contains the API name for this compatibility information. The dimension
   * metadata also contains other helpful information like the UI name and description.
   */
  dimensionMetadata?: DimensionMetadata1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionCompatibilitySchema: Schema<DimensionCompatibility> = s.object<DimensionCompatibility>(
  {
    compatibility: s.optional(s.lazy(() => compatibility1Schema)),
    dimensionMetadata: s.optional(s.lazy(() => dimensionMetadata1Schema)),
  },
  { additionalProperties: s.json() },
);
