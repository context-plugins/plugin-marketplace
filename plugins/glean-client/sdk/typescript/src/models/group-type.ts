import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of user group */
export const GroupType = {
  Department: "DEPARTMENT",
  All: "ALL",
  Team: "TEAM",
  JobTitle: "JOB_TITLE",
  RoleType: "ROLE_TYPE",
  Location: "LOCATION",
  Region: "REGION",
  ExternalGroup: "EXTERNAL_GROUP",
  CollectionAudience: "COLLECTION_AUDIENCE",
} as const;
export type GroupType = (typeof GroupType)[keyof typeof GroupType] | (string & {});

export const groupTypeSchema: EnumSchema<GroupType> = s.enumOf<GroupType>(GroupType);
