import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalFieldDefinitionSchema,
  type AdditionalFieldDefinition,
} from "./additional-field-definition.js";
import { datasourceProfileSchema, type DatasourceProfile } from "./datasource-profile.js";
import { teamEmailSchema, type TeamEmail } from "./team-email.js";
import { teamMemberSchema, type TeamMember } from "./team-member.js";

/** Information about an employee's team */
export type TeamInfoDefinition = {
  /** The unique ID of the team */
  id: string;
  /** Human-readable team name */
  name: string;
  /** The description of this team */
  description?: string;
  /**
   * Typically the highest level organizational unit; generally applies to bigger companies with
   * multiple distinct businesses.
   */
  businessUnit?: string;
  /** An organizational unit where everyone has a similar task, e.g. `Engineering`. */
  department?: string;
  /** A link to the team's photo */
  photoUrl?: string;
  /** A link to an external team page. If set, team results will link to it. */
  externalLink?: string;
  /** The emails of the team */
  emails?: TeamEmail[];
  /** The datasource profiles of the team, e.g. `Slack`,`Github`. */
  datasourceProfiles?: DatasourceProfile[];
  /** The members of the team */
  members: TeamMember[];
  /** List of additional fields with more information about the team. */
  additionalFields?: AdditionalFieldDefinition[];
};

export const teamInfoDefinitionSchema: Schema<TeamInfoDefinition> = s.object<TeamInfoDefinition>({
  id: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  businessUnit: s.optional(s.string()),
  department: s.optional(s.string()),
  photoUrl: s.optional(s.string()),
  externalLink: s.optional(s.string()),
  emails: s.optional(s.array(s.lazy(() => teamEmailSchema))),
  datasourceProfiles: s.optional(s.array(s.lazy(() => datasourceProfileSchema))),
  members: s.array(s.lazy(() => teamMemberSchema)),
  additionalFields: s.optional(s.array(s.lazy(() => additionalFieldDefinitionSchema))),
});
