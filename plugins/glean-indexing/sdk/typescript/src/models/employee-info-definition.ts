import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalFieldDefinitionSchema,
  type AdditionalFieldDefinition,
} from "./additional-field-definition.js";
import { datasourceProfileSchema, type DatasourceProfile } from "./datasource-profile.js";
import { employeeTeamInfoSchema, type EmployeeTeamInfo } from "./employee-team-info.js";
import { entityRelationshipSchema, type EntityRelationship } from "./entity-relationship.js";
import { socialNetworkDefinitionSchema, type SocialNetworkDefinition } from "./social-network-definition.js";
import { structuredLocationSchema, type StructuredLocation } from "./structured-location.js";

/** Describes employee info */
export type EmployeeInfoDefinition = {
  /** The employee's email */
  email: string;
  /** The first name of the employee. **Note**: The value cannot be empty */
  firstName?: string;
  /** The last name of the employee. **Note**: The value cannot be empty */
  lastName?: string;
  /** The preferred name or nickname of the employee */
  preferredName?: string;
  /**
   * **[Advanced]** A unique universal internal identifier for the employee. This is solely used for
   * understanding manager relationships along with `managerId`.
   */
  id?: string;
  /** The employee's phone number. */
  phoneNumber?: string;
  /**
   * The employee's location (city/office name etc).
   *
   * @deprecated
   */
  location?: string;
  /** Detailed location with information about country, state, city etc. */
  structuredLocation?: StructuredLocation;
  /** The employee's role title. */
  title?: string;
  /** The employee's profile pic */
  photoUrl?: string;
  /**
   * Typically the highest level organizational unit; generally applies to bigger companies with
   * multiple distinct businesses.
   */
  businessUnit?: string;
  /** An organizational unit where everyone has a similar task, e.g. `Engineering`. */
  department: string;
  /** The datasource profiles of the employee, e.g. `Slack`,`Github`. */
  datasourceProfiles?: DatasourceProfile[];
  /** Info about the employee's team(s) */
  teams?: EmployeeTeamInfo[];
  /** The date when the employee started */
  startDate?: string;
  /** If a former employee, the last date of employment. */
  endDate?: string;
  /** Short biography or mission statement of the employee. */
  bio?: string;
  /** She/her, He/his or other pronoun. */
  pronoun?: string;
  /** Other names associated with the employee. */
  alsoKnownAs?: string[];
  /** Link to internal company person profile. */
  profileUrl?: string;
  /** List of social network profiles. */
  socialNetworks?: SocialNetworkDefinition[];
  /** The email of the employee's manager */
  managerEmail?: string;
  /**
   * **[Advanced]** A unique universal internal identifier for the employee's manager. This is
   * solely used in conjunction with `id`.
   */
  managerId?: string;
  /**
   * The type of the employee, an enum of `FULL_TIME`, `CONTRACTOR`, `NON_EMPLOYEE`
   *
   * @default "FULL_TIME"
   */
  type?: string;
  /**
   * List of unidirectional relationships with other employees. E.g. this employee (`A`) is a
   * CHIEF_OF_STAFF to another employee (`B`); or this employee (`A`) is an EXECUTIVE_ASSISTANT of
   * another employee (`C`). The mapping should be attached to `A`'s profile.
   */
  relationships?: EntityRelationship[];
  /** The status of the employee, an enum of `CURRENT`, `FUTURE`, `EX` @default "CURRENT" */
  status?: string;
  /** List of additional fields with more information about the employee. */
  additionalFields?: AdditionalFieldDefinition[];
};

export const employeeInfoDefinitionSchema: Schema<EmployeeInfoDefinition> = s.object<EmployeeInfoDefinition>({
  email: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  preferredName: s.optional(s.string()),
  id: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  location: s.optional(s.string()),
  structuredLocation: s.optional(s.lazy(() => structuredLocationSchema)),
  title: s.optional(s.string()),
  photoUrl: s.optional(s.string()),
  businessUnit: s.optional(s.string()),
  department: s.string(),
  datasourceProfiles: s.optional(s.array(s.lazy(() => datasourceProfileSchema))),
  teams: s.optional(s.array(s.lazy(() => employeeTeamInfoSchema))),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  bio: s.optional(s.string()),
  pronoun: s.optional(s.string()),
  alsoKnownAs: s.optional(s.array(s.string())),
  profileUrl: s.optional(s.string()),
  socialNetworks: s.optional(s.array(s.lazy(() => socialNetworkDefinitionSchema))),
  managerEmail: s.optional(s.string()),
  managerId: s.optional(s.string()),
  type: s.defaulted(s.string(), "FULL_TIME"),
  relationships: s.optional(s.array(s.lazy(() => entityRelationshipSchema))),
  status: s.defaulted(s.string(), "CURRENT"),
  additionalFields: s.optional(s.array(s.lazy(() => additionalFieldDefinitionSchema))),
});
