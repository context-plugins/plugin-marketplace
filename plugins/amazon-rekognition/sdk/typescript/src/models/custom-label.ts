import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geometrySchema, type Geometry } from "./geometry.js";

export type CustomLabel = {
  /** The name of the custom label. */
  name?: string;
  /**
   * The confidence that the model has in the detection of the custom label. The range is 0-100. A
   * higher value indicates a higher confidence.
   */
  confidence?: number;
  geometry?: Geometry;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customLabelSchema: Schema<CustomLabel> = s.object<CustomLabel>(
  {
    name: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    geometry: s.optional(s.lazy(() => geometrySchema)),
    _keysMap: {
      name: "Name",
      confidence: "Confidence",
      geometry: "Geometry",
    },
  },
  { additionalProperties: s.json() },
);
