import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  id?: number;
  firstname?: string | null;
  lastname?: string | null;
  createdon?: Date;
  email?: string | null;
  phoneNumber?: string | null;
  mobile?: string | null;
  referralCode?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userProperties: s.Shape<User> = {
  id: s.optional(s.int()),
  firstname: s.optionalNullable(s.string()),
  lastname: s.optionalNullable(s.string()),
  createdon: s.optional(s.dateTime()),
  email: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  mobile: s.optionalNullable(s.string()),
  referralCode: s.optionalNullable(s.string()),
};

export const userInternalSchema: Schema<User> = s.object<User>(userProperties, {
  additionalProperties: s.json(),
});

export const userSchema: Schema<User> = s.lazySchema(() =>
  s.object<User>(
    {
      ...userProperties,
      firstname: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
      lastname: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
      email: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
      phoneNumber: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      mobile: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(100))),
      referralCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
