import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type RolesResponse = {
  roles?: Role[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rolesResponseSchema: Schema<RolesResponse> = s.object<RolesResponse>(
  {
    roles: s.optional(s.array(s.lazy(() => roleSchema))),
  },
  { additionalProperties: s.json() },
);
