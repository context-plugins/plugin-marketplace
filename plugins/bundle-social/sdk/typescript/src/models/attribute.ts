import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repeatedEnumValueSchema, type RepeatedEnumValue } from "./repeated-enum-value.js";
import { uriValueSchema, type UriValue } from "./uri-value.js";

export type Attribute = {
  name: string;
  values?: Record<string, unknown>[];
  repeatedEnumValue?: RepeatedEnumValue;
  uriValues?: UriValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attributeSchema: Schema<Attribute> = s.object<Attribute>(
  {
    name: s.string(),
    values: s.optional(s.array(s.record(s.string(), s.unknown()))),
    repeatedEnumValue: s.optional(s.lazy(() => repeatedEnumValueSchema)),
    uriValues: s.optional(s.array(s.lazy(() => uriValueSchema))),
  },
  { additionalProperties: s.json() },
);
