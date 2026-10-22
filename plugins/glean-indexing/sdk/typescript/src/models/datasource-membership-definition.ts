import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * describes the membership row of a group. Only one of memberUserId and memberGroupName can be
 * specified.
 */
export type DatasourceMembershipDefinition = {
  /** The group for which the membership is specified */
  groupName: string;
  /** If the member is a user, then the email or datasource id for the user */
  memberUserId?: string;
  /** If the member is a group, then the name of the member group */
  memberGroupName?: string;
};

export const datasourceMembershipDefinitionSchema: Schema<DatasourceMembershipDefinition> =
  s.object<DatasourceMembershipDefinition>({
    groupName: s.string(),
    memberUserId: s.optional(s.string()),
    memberGroupName: s.optional(s.string()),
  });
