import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

export type Filter2 = {
  /** Name of the filter */
  name?: string;
  value?: Value1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter2Schema: Schema<Filter2> = s.object<Filter2>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.lazy(() => value1Schema)),
  },
  { additionalProperties: s.json() },
);
