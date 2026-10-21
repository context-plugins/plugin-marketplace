import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeField2 = {
  Badges: "BADGES",
  BusyEvents: "BUSY_EVENTS",
  DocumentActivity: "DOCUMENT_ACTIVITY",
  InviteInfo: "INVITE_INFO",
  PeopleDistance: "PEOPLE_DISTANCE",
  Permissions: "PERMISSIONS",
  PeopleDetails: "PEOPLE_DETAILS",
  ManagementDetails: "MANAGEMENT_DETAILS",
  PeopleProfileSettings: "PEOPLE_PROFILE_SETTINGS",
  PeopleWithoutManager: "PEOPLE_WITHOUT_MANAGER",
} as const;
export type IncludeField2 = (typeof IncludeField2)[keyof typeof IncludeField2] | (string & {});

export const includeField2Schema: EnumSchema<IncludeField2> = s.enumOf<IncludeField2>(IncludeField2);
