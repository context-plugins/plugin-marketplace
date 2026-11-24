import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Input2 = {
  /** Minimum balance from request */
  min: string;
  /** Maximum balance from request */
  max?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const input2Schema: Schema<Input2> = s.object<Input2>(
  {
    min: s.string(),
    max: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
