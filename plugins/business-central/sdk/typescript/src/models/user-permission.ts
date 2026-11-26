import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type UserPermission = {
  id?: string;
  /** The permission set role ID */
  roleId?: string;
  /** The permission set display name */
  displayName?: string;
  /** The company name scope */
  company?: string;
  scope?: Scope;
  appId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userPermissionSchema: Schema<UserPermission> = s.object<UserPermission>(
  {
    id: s.optional(s.string()),
    roleId: s.optional(s.string()),
    displayName: s.optional(s.string()),
    company: s.optional(s.string()),
    scope: s.optional(s.lazy(() => scopeSchema)),
    appId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
