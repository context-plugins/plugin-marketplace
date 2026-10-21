import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";
import { userRoleSchema, type UserRole } from "./user-role.js";

export type AccessRequestPermissionDeniedResponse = {
  /** @default "PERMISSION_DENIED" */
  errorType?: "PERMISSION_DENIED";
  createdBy: Person;
  requestableRoles: UserRole[];
  hasPendingRequest: boolean;
};

export const accessRequestPermissionDeniedResponseSchema: Schema<AccessRequestPermissionDeniedResponse> =
  s.object<AccessRequestPermissionDeniedResponse>({
    errorType: s.defaulted(s.literal("PERMISSION_DENIED"), "PERMISSION_DENIED"),
    createdBy: personSchema,
    requestableRoles: s.array(s.lazy(() => userRoleSchema)),
    hasPendingRequest: s.boolean(),
  });
