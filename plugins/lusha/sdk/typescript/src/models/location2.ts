import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location2 = {
  country: string | null;
  state: string | null;
  city: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location2Schema: Schema<Location2> = s.object<Location2>(
  {
    country: s.nullable(s.string()),
    state: s.nullable(s.string()),
    city: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
