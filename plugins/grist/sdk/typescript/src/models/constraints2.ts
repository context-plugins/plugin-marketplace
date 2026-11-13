import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enum1InternalSchema, enum1Schema, type Enum1 } from "./unions/enum1.js";
import { maximum1Schema, type Maximum1 } from "./unions/maximum1.js";
import { minimum1Schema, type Minimum1 } from "./unions/minimum1.js";

/** The following constraints are supported for `integer` fields. */
export type Constraints2 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum1;
  minimum?: Minimum1;
  maximum?: Maximum1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints2Properties: s.Shape<Constraints2> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enum1InternalSchema)),
  minimum: s.optional(s.lazy(() => minimum1Schema)),
  maximum: s.optional(s.lazy(() => maximum1Schema)),
};

export const constraints2InternalSchema: Schema<Constraints2> = s.object<Constraints2>(
  constraints2Properties,
  { additionalProperties: s.json() },
);

export const constraints2Schema: Schema<Constraints2> = s.lazySchema(() =>
  s.object<Constraints2>(
    {
      ...constraints2Properties,
      enum: s.optional(s.lazy(() => enum1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
