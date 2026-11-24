import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source2 = {
  parameter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source2Schema: Schema<Source2> = s.object<Source2>(
  {
    parameter: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
