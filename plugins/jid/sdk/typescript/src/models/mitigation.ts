import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Mitigation = {
  code?: string;
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mitigationSchema: Schema<Mitigation> = s.object<Mitigation>(
  {
    code: s.optional(s.string()),
    text: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
