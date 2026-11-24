import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Number = {
  id?: string;
  /** Plus sign followed by 7–15 digits. */
  phoneNumber?: string;
  areaName?: string | null;
  areaCode?: string | null;
  deliverTo?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const numberProperties: s.Shape<Number> = {
  id: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  areaName: s.optionalNullable(s.string()),
  areaCode: s.optionalNullable(s.string()),
  deliverTo: s.optional(s.string()),
};

export const numberInternalSchema: Schema<Number> = s.object<Number>(numberProperties, {
  additionalProperties: s.json(),
});

export const numberSchema: Schema<Number> = s.lazySchema(() =>
  s.object<Number>(
    {
      ...numberProperties,
      phoneNumber: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
