import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeField1 = {
  People: "PEOPLE",
  Teams: "TEAMS",
  PeopleDistance: "PEOPLE_DISTANCE",
  Permissions: "PERMISSIONS",
  Facets: "FACETS",
  InviteInfo: "INVITE_INFO",
  LastExtensionUse: "LAST_EXTENSION_USE",
  ManagementDetails: "MANAGEMENT_DETAILS",
  UnprocessedTeams: "UNPROCESSED_TEAMS",
} as const;
export type IncludeField1 = (typeof IncludeField1)[keyof typeof IncludeField1] | (string & {});

export const includeField1Schema: EnumSchema<IncludeField1> = s.enumOf<IncludeField1>(IncludeField1);
