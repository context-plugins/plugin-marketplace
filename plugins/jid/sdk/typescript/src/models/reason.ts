import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reason = {
  text?: string;
  points?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reasonSchema: Schema<Reason> = s.object<Reason>(
  {
    text: s.optional(s.string()),
    points: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
