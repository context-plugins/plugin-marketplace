import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evalReasonSchema, type EvalReason } from "./eval-reason.js";
import { typeSchema, type Type } from "./type.js";
import { valueSchema, type Value } from "./unions/value.js";

export type Variable = {
  /** unique database id */
  id: string;
  /** Feature ID that this variable belongs to */
  feature?: string;
  /** Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. */
  key: string;
  /** Variable type */
  type: Type;
  /** Variable value can be a string, number, boolean, or JSON */
  value: Value;
  /** The reason the User was Served this particular value */
  eval?: EvalReason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const variableProperties: s.Shape<Variable> = {
  id: s.string(),
  feature: s.optional(s.string()),
  key: s.string(),
  type: typeSchema,
  value: valueSchema,
  eval: s.optional(s.lazy(() => evalReasonSchema)),
  _keysMap: {
    id: "_id",
    feature: "_feature",
  },
};

export const variableInternalSchema: Schema<Variable> = s.object<Variable>(variableProperties, {
  additionalProperties: s.json(),
});

export const variableSchema: Schema<Variable> = s.lazySchema(() =>
  s.object<Variable>(
    {
      ...variableProperties,
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
