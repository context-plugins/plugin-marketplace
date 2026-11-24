import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type Gender = {
  /** The predicted gender of the face. */
  value?: Value;
  /** Level of confidence in the prediction. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const genderSchema: Schema<Gender> = s.object<Gender>(
  {
    value: s.optional(s.lazy(() => valueSchema)),
    confidence: s.optional(s.float64()),
    _keysMap: {
      value: "Value",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
