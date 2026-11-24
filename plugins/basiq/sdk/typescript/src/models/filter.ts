import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type Filter = {
  name: string;
  value: Value;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterSchema: Schema<Filter> = s.object<Filter>(
  {
    name: s.string(),
    value: valueSchema,
  },
  { additionalProperties: s.json() },
);
