import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A float typed flag value */
export type OfrepFloatFlag = {
  /** Flag evaluation result */
  value: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepFloatFlagSchema: Schema<OfrepFloatFlag> = s.object<OfrepFloatFlag>(
  {
    value: s.float64(),
  },
  { additionalProperties: s.json() },
);
