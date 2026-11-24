import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";

export type AuthUser = {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  organization?: Organization;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authUserProperties: s.Shape<AuthUser> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  role: s.optional(s.string()),
  organization: s.optional(s.lazy(() => organizationSchema)),
};

export const authUserInternalSchema: Schema<AuthUser> = s.object<AuthUser>(authUserProperties, {
  additionalProperties: s.json(),
});

export const authUserSchema: Schema<AuthUser> = s.lazySchema(() =>
  s.object<AuthUser>(
    {
      ...authUserProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
