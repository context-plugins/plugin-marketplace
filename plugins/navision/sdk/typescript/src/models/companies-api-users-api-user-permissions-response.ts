import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userPermissionSchema, type UserPermission } from "./user-permission.js";

export type CompaniesApiUsersApiUserPermissionsResponse = {
  value?: UserPermission[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiUsersApiUserPermissionsResponseSchema: Schema<CompaniesApiUsersApiUserPermissionsResponse> =
  s.object<CompaniesApiUsersApiUserPermissionsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => userPermissionSchema))),
    },
    { additionalProperties: s.json() },
  );
