import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Errors that occurred during purchase */
export type Errors1 = {
  base: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errors1Schema: Schema<Errors1> = s.object<Errors1>(
  {
    base: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
