import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ParamModel = {
  additional?: Record<string, string>;
  name: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paramModelProperties: s.Shape<ParamModel> = {
  additional: s.optional(s.record(s.string(), s.string())),
  name: s.string(),
  value: s.string(),
};

export const paramModelInternalSchema: Schema<ParamModel> = s.object<ParamModel>(paramModelProperties, {
  additionalProperties: s.json(),
});

export const paramModelSchema: Schema<ParamModel> = s.lazySchema(() =>
  s.object<ParamModel>(
    {
      ...paramModelProperties,
      name: s.string().check(s.minLength(1)),
      value: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
