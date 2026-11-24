import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repeatedEnumValueSchema, type RepeatedEnumValue } from "./repeated-enum-value.js";
import { uriValue1InternalSchema, uriValue1Schema, type UriValue1 } from "./uri-value1.js";

export type Attribute1 = {
  name: string;
  values?: Record<string, unknown>[];
  repeatedEnumValue?: RepeatedEnumValue;
  uriValues?: UriValue1[];
};

const attribute1Properties: s.Shape<Attribute1> = {
  name: s.string(),
  values: s.optional(s.array(s.record(s.string(), s.unknown()))),
  repeatedEnumValue: s.optional(s.lazy(() => repeatedEnumValueSchema)),
  uriValues: s.optional(s.array(s.lazy(() => uriValue1InternalSchema))),
};

export const attribute1InternalSchema: Schema<Attribute1> = s.object<Attribute1>(attribute1Properties);

export const attribute1Schema: Schema<Attribute1> = s.lazySchema(() =>
  s.object<Attribute1>({
    ...attribute1Properties,
    uriValues: s.optional(s.array(s.lazy(() => uriValue1Schema))),
  }),
);
