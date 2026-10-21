import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";
import { personSchema, type Person } from "./person.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";
import { userRoleSchema, type UserRole } from "./user-role.js";

export type UserRoleSpecification = {
  sourceDocumentSpec?: DocumentSpec4;
  person?: Person;
  group?: Group;
  /** A user's role with respect to a specific document. */
  role: UserRole;
};

export const userRoleSpecificationSchema: Schema<UserRoleSpecification> = s.object<UserRoleSpecification>({
  sourceDocumentSpec: s.optional(s.lazy(() => documentSpec4Schema)),
  person: s.optional(s.lazy(() => personSchema)),
  group: s.optional(s.lazy(() => groupSchema)),
  role: userRoleSchema,
});
