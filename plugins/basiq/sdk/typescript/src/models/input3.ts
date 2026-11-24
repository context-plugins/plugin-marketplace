import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Echo of the input parameters */
export type Input3 = {
  /** Minimum income value from request */
  min: string;
  /** Maximum income value from request */
  max: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const input3Schema: Schema<Input3> = s.object<Input3>(
  {
    min: s.string(),
    max: s.string(),
  },
  { additionalProperties: s.json() },
);
