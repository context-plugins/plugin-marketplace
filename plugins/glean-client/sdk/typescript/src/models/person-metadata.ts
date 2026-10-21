import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anonymousEventSchema, type AnonymousEvent } from "./anonymous-event.js";
import { badgeSchema, type Badge } from "./badge.js";
import { customFieldDataSchema, type CustomFieldData } from "./custom-field-data.js";
import { datasourceProfileSchema, type DatasourceProfile } from "./datasource-profile.js";
import { inviteInfoSchema, type InviteInfo } from "./invite-info.js";
import { permissionsSchema, type Permissions } from "./permissions.js";
import { personDistanceSchema, type PersonDistance } from "./person-distance.js";
import { personTeamSchema, type PersonTeam } from "./person-team.js";
import { personSchema, type Person } from "./person.js";
import { querySuggestionListSchema, type QuerySuggestionList } from "./query-suggestion-list.js";
import { socialNetworkSchema, type SocialNetwork } from "./social-network.js";
import { structuredLocationSchema, type StructuredLocation } from "./structured-location.js";
import { type2Schema, type Type2 } from "./type2.js";

export type PersonMetadata = {
  type?: Type2;
  /** The first name of the person */
  firstName?: string;
  /** The last name of the person */
  lastName?: string;
  /** Job title. */
  title?: string;
  /**
   * Typically the highest level organizational unit; generally applies to bigger companies with
   * multiple distinct businesses.
   */
  businessUnit?: string;
  /** An organizational unit where everyone has a similar task, e.g. `Engineering`. */
  department?: string;
  /**
   * Normalized job-function category assigned by Entity Builder from the source department and,
   * when available, job title. Unlike `department`, which preserves the company-specific
   * organizational unit, this field groups departments into configured categories such as
   * `Engineering`, `Sales`, or `IT`; it may be `Unknown` when the mapping is inconclusive.
   */
  jobFunction?: string;
  /** Info about the employee's team(s). */
  teams?: PersonTeam[];
  /** The number of people in this person's department. */
  departmentCount?: number;
  /** The user's primary email address */
  email?: string;
  /** Additional email addresses of this user beyond the primary, if any. */
  aliasEmails?: string[];
  /** User facing string representing the person's location. */
  location?: string;
  /** Detailed location with information about country, state, city etc. */
  structuredLocation?: StructuredLocation;
  /** Link to a customer's internal profile page. This is set to '#' when no link is desired. */
  externalProfileLink?: string;
  manager?: Person;
  /**
   * The chain of reporting in the company as far up as it goes. The last entry is this person's
   * direct manager.
   */
  managementChain?: Person[];
  /** Phone number as a number string. */
  phone?: string;
  /** The timezone of the person. E.g. "Pacific Daylight Time". */
  timezone?: string;
  /** The offset of the person's timezone in seconds from UTC. */
  timezoneOffset?: number;
  /** The IANA timezone identifier, e.g. "America/Los_Angeles". */
  timezoneIana?: string;
  /**
   * The URL of the person's avatar. Public, glean-authenticated and Base64 encoded data URLs are
   * all valid (but not third-party-authenticated URLs).
   */
  photoUrl?: string;
  /** The original photo URL of the person's avatar before any edits they made are applied */
  uneditedPhotoUrl?: string;
  /** The URL of the person's banner photo. */
  bannerUrl?: string;
  reports?: Person[];
  /** The date when the employee started. */
  startDate?: string;
  /** If a former employee, the last date of employment. */
  endDate?: string;
  /** Short biography or mission statement of the employee. */
  bio?: string;
  /** She/her, He/his or other pronoun. */
  pronoun?: string;
  /** The total recursive size of the people reporting to this person, or 1 */
  orgSizeCount?: number;
  /** The total number of people who directly report to this person, or 0 */
  directReportsCount?: number;
  /** The preferred name of the person, or a nickname. */
  preferredName?: string;
  /** List of social network profiles. */
  socialNetwork?: SocialNetwork[];
  /** List of profiles this user has in different datasources / tools that they use. */
  datasourceProfile?: DatasourceProfile[];
  querySuggestions?: QuerySuggestionList;
  /** List of people and distances to those people from this person. Optionally with metadata. */
  peopleDistance?: PersonDistance[];
  /** Information regarding the invite status of a person. */
  inviteInfo?: InviteInfo;
  /** Whether the user has signed into Glean at least once. */
  isSignedUp?: boolean;
  /** The last time the user has used the Glean extension in ISO 8601 format. */
  lastExtensionUse?: Date;
  /**
   * Describes the permissions levels that a user has for permissioned features. When the client
   * sends this, Permissions.read and Permissions.write are the additional permissions granted to a
   * user on top of what they have via their roles. When the server sends this, Permissions.read and
   * Permissions.write are the complete (merged) set of permissions the user has, and
   * Permissions.roles is just for display purposes.
   */
  permissions?: Permissions;
  /** User customizable fields for additional people information. */
  customFields?: CustomFieldData[];
  /** The logging id of the person used in scrubbed logs, tracking GA metrics. */
  loggingId?: string;
  /** Percentage of the company that started strictly after this person. Between [0,100). */
  startDatePercentile?: number;
  /** Intervals of busy time for this person, along with the type of event they're busy with. */
  busyEvents?: AnonymousEvent[];
  /** flag settings to indicate user profile settings for certain items */
  profileBoolSettings?: Record<string, boolean>;
  /** The badges that a user has earned over their lifetime. */
  badges?: Badge[];
  /** Whether this person is a "root" node in their organization's hierarchy. */
  isOrgRoot?: boolean;
};

export const personMetadataSchema: Schema<PersonMetadata> = s.object<PersonMetadata>({
  type: s.optional(s.lazy(() => type2Schema)),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  title: s.optional(s.string()),
  businessUnit: s.optional(s.string()),
  department: s.optional(s.string()),
  jobFunction: s.optional(s.string()),
  teams: s.optional(s.array(s.lazy(() => personTeamSchema))),
  departmentCount: s.optional(s.int()),
  email: s.optional(s.string()),
  aliasEmails: s.optional(s.array(s.string())),
  location: s.optional(s.string()),
  structuredLocation: s.optional(s.lazy(() => structuredLocationSchema)),
  externalProfileLink: s.optional(s.string()),
  manager: s.optional(s.lazy(() => personSchema)),
  managementChain: s.optional(s.array(s.lazy(() => personSchema))),
  phone: s.optional(s.string()),
  timezone: s.optional(s.string()),
  timezoneOffset: s.optional(s.int()),
  timezoneIana: s.optional(s.string()),
  photoUrl: s.optional(s.string()),
  uneditedPhotoUrl: s.optional(s.string()),
  bannerUrl: s.optional(s.string()),
  reports: s.optional(s.array(s.lazy(() => personSchema))),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  bio: s.optional(s.string()),
  pronoun: s.optional(s.string()),
  orgSizeCount: s.optional(s.int()),
  directReportsCount: s.optional(s.int()),
  preferredName: s.optional(s.string()),
  socialNetwork: s.optional(s.array(s.lazy(() => socialNetworkSchema))),
  datasourceProfile: s.optional(s.array(s.lazy(() => datasourceProfileSchema))),
  querySuggestions: s.optional(s.lazy(() => querySuggestionListSchema)),
  peopleDistance: s.optional(s.array(s.lazy(() => personDistanceSchema))),
  inviteInfo: s.optional(s.lazy(() => inviteInfoSchema)),
  isSignedUp: s.optional(s.boolean()),
  lastExtensionUse: s.optional(s.dateTime()),
  permissions: s.optional(s.lazy(() => permissionsSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldDataSchema))),
  loggingId: s.optional(s.string()),
  startDatePercentile: s.optional(s.float64()),
  busyEvents: s.optional(s.array(s.lazy(() => anonymousEventSchema))),
  profileBoolSettings: s.optional(s.record(s.string(), s.boolean())),
  badges: s.optional(s.array(s.lazy(() => badgeSchema))),
  isOrgRoot: s.optional(s.boolean()),
  _keysMap: {
    timezoneIana: "timezoneIANA",
  },
});
