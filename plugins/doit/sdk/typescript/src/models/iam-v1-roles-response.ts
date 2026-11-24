import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleDoiTRolesApiSchema, type RoleDoiTRolesApi } from "./role-doi-troles-api.js";

export type IamV1RolesResponse = {
  /** Number of roles returned. */
  rowCount?: number;
  roles?: RoleDoiTRolesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iamV1RolesResponseSchema: Schema<IamV1RolesResponse> = s.object<IamV1RolesResponse>(
  {
    rowCount: s.optional(s.int()),
    roles: s.optional(s.array(s.lazy(() => roleDoiTRolesApiSchema))),
  },
  { additionalProperties: s.json() },
);
