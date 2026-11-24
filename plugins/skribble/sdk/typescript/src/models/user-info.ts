import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about the user observer. */
export type UserInfo = {
  /** User ID. */
  id?: string;
  /** User email address. */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userInfoProperties: s.Shape<UserInfo> = {
  id: s.optional(s.string()),
  email: s.optional(s.string()),
};

export const userInfoInternalSchema: Schema<UserInfo> = s.object<UserInfo>(userInfoProperties, {
  additionalProperties: s.json(),
});

export const userInfoSchema: Schema<UserInfo> = s.lazySchema(() =>
  s.object<UserInfo>(
    {
      ...userInfoProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
