import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomRole = {
  roleId?: string;
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customRoleSchema: Schema<CustomRole> = s.object<CustomRole>(
  {
    roleId: s.optional(s.string()),
    permissions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
