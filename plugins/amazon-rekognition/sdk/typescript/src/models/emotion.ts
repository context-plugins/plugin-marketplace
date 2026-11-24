import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Emotion = {
  /** Type of emotion detected. */
  type?: Type1;
  /** Level of confidence in the determination. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emotionSchema: Schema<Emotion> = s.object<Emotion>(
  {
    type: s.optional(s.lazy(() => type1Schema)),
    confidence: s.optional(s.float64()),
    _keysMap: {
      type: "Type",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
