import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Input1 = {
  /** Minimum balance value */
  min: string;
  /** Maximum balance value */
  max: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const input1Schema: Schema<Input1> = s.object<Input1>(
  {
    min: s.string(),
    max: s.string(),
  },
  { additionalProperties: s.json() },
);
