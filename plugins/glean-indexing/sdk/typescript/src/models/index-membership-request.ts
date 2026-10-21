import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceMembershipDefinitionSchema,
  type DatasourceMembershipDefinition,
} from "./datasource-membership-definition.js";

/** Describes the request body of the /indexmembership API call */
export type IndexMembershipRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The datasource for which the membership is added */
  datasource: string;
  /**
   * describes the membership row of a group. Only one of memberUserId and memberGroupName can be
   * specified.
   */
  membership: DatasourceMembershipDefinition;
};

export const indexMembershipRequestSchema: Schema<IndexMembershipRequest> = s.object<IndexMembershipRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  membership: datasourceMembershipDefinitionSchema,
});
