import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * describes the membership row of a group in the bulk uploaded. Only one of memberUserId and
 * memberGroupName can be specified.
 */
export type DatasourceBulkMembershipDefinition = {
  /** If the member is a user, then the email or datasource id for the user */
  memberUserId?: string;
  /** If the member is a group, then the name of the member group */
  memberGroupName?: string;
};

export const datasourceBulkMembershipDefinitionSchema: Schema<DatasourceBulkMembershipDefinition> =
  s.object<DatasourceBulkMembershipDefinition>({
    memberUserId: s.optional(s.string()),
    memberGroupName: s.optional(s.string()),
  });
