import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumInternalSchema, enumSchema, type Enum } from "./unions/enum.js";
import { maximumSchema, type Maximum } from "./unions/maximum.js";
import { minimumSchema, type Minimum } from "./unions/minimum.js";

/** The following constraints are supported for `number` fields. */
export type Constraints1 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum;
  minimum?: Minimum;
  maximum?: Maximum;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints1Properties: s.Shape<Constraints1> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enumInternalSchema)),
  minimum: s.optional(s.lazy(() => minimumSchema)),
  maximum: s.optional(s.lazy(() => maximumSchema)),
};

export const constraints1InternalSchema: Schema<Constraints1> = s.object<Constraints1>(
  constraints1Properties,
  { additionalProperties: s.json() },
);

export const constraints1Schema: Schema<Constraints1> = s.lazySchema(() =>
  s.object<Constraints1>(
    {
      ...constraints1Properties,
      enum: s.optional(s.lazy(() => enumSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
