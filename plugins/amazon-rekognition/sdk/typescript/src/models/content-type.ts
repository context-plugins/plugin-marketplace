import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContentType = {
  /** The confidence level of the label given */
  confidence?: number;
  /** The name of the label */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentTypeSchema: Schema<ContentType> = s.object<ContentType>(
  {
    confidence: s.optional(s.float64()),
    name: s.optional(s.string()),
    _keysMap: {
      confidence: "Confidence",
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
