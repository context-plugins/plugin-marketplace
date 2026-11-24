import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1NumbersResponse3 = {
  id?: string;
  /** Plus sign followed by 7–15 digits. */
  phoneNumber?: string;
  released?: boolean;
  restorable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NumbersResponse3Properties: s.Shape<ApiV1NumbersResponse3> = {
  id: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  released: s.optional(s.boolean()),
  restorable: s.optional(s.boolean()),
};

export const apiV1NumbersResponse3InternalSchema: Schema<ApiV1NumbersResponse3> =
  s.object<ApiV1NumbersResponse3>(apiV1NumbersResponse3Properties, { additionalProperties: s.json() });

export const apiV1NumbersResponse3Schema: Schema<ApiV1NumbersResponse3> = s.lazySchema(() =>
  s.object<ApiV1NumbersResponse3>(
    {
      ...apiV1NumbersResponse3Properties,
      phoneNumber: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
