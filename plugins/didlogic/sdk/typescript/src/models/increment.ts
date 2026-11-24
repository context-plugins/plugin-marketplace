import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Increment = {
  /** Seconds billed for the first block */
  initial: number;
  /** Seconds per block after the first */
  unit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incrementSchema: Schema<Increment> = s.object<Increment>(
  {
    initial: s.int(),
    unit: s.int(),
  },
  { additionalProperties: s.json() },
);
