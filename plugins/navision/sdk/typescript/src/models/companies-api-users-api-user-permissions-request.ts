import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesApiUsersApiUserPermissionsRequest = {
  /** The permission set role ID */
  roleId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiUsersApiUserPermissionsRequestSchema: Schema<CompaniesApiUsersApiUserPermissionsRequest> =
  s.object<CompaniesApiUsersApiUserPermissionsRequest>(
    {
      roleId: s.string(),
    },
    { additionalProperties: s.json() },
  );
