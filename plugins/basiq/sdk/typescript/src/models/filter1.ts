import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

export type Filter1 = {
  name?: string;
  value?: Record<string, Value1>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter1Schema: Schema<Filter1> = s.object<Filter1>(
  {
    name: s.optional(s.string()),
    value: s.optional(
      s.record(
        s.string(),
        s.lazy(() => value1Schema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
