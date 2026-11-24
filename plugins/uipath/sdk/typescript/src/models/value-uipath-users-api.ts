import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUipathUsersApi = {
  /** Unique user identifier */
  id?: number;
  /** Username login identifier */
  userName?: string;
  /** Display name of the user */
  name?: string;
  /** Email address of the user */
  emailAddress?: string;
  /** Whether the user account is active */
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const valueUipathUsersApiProperties: s.Shape<ValueUipathUsersApi> = {
  id: s.optional(s.int()),
  userName: s.optional(s.string()),
  name: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
  _keysMap: {
    id: "Id",
    userName: "UserName",
    name: "Name",
    emailAddress: "EmailAddress",
    isActive: "IsActive",
  },
};

export const valueUipathUsersApiInternalSchema: Schema<ValueUipathUsersApi> = s.object<ValueUipathUsersApi>(
  valueUipathUsersApiProperties,
  { additionalProperties: s.json() },
);

export const valueUipathUsersApiSchema: Schema<ValueUipathUsersApi> = s.lazySchema(() =>
  s.object<ValueUipathUsersApi>(
    {
      ...valueUipathUsersApiProperties,
      emailAddress: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
