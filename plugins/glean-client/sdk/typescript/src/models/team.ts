import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldDataSchema, type CustomFieldData } from "./custom-field-data.js";
import { datasourceProfileSchema, type DatasourceProfile } from "./datasource-profile.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import {
  personToTeamRelationshipSchema,
  type PersonToTeamRelationship,
} from "./person-to-team-relationship.js";
import { relatedObjectEdgeSchema, type RelatedObjectEdge } from "./related-object-edge.js";
import { Status, statusSchema } from "./status.js";
import { teamEmailSchema, type TeamEmail } from "./team-email.js";

export type Team = {
  /** A list of objects related to a source object. */
  relatedObjects?: Record<string, RelatedObjectEdge>;
  permissions?: ObjectPermissions;
  /** Unique identifier */
  id: string;
  /** Team name */
  name: string;
  /** A description of the team */
  description?: string;
  /**
   * Typically the highest level organizational unit; generally applies to bigger companies with
   * multiple distinct businesses.
   */
  businessUnit?: string;
  /** An organizational unit where everyone has a similar task, e.g. `Engineering`. */
  department?: string;
  /** A link to the team's photo. */
  photoUrl?: string;
  /** A link to the team's banner photo. */
  bannerUrl?: string;
  /** Link to a team page on the internet or your company's intranet */
  externalLink?: string;
  /** The members on this team */
  members?: PersonToTeamRelationship[];
  /**
   * Number of members on this team (recursive; includes all individuals that belong to this team,
   * and all individuals that belong to a subteam within this team)
   */
  memberCount?: number;
  /** The emails for this team */
  emails?: TeamEmail[];
  /** Customizable fields for additional team information. */
  customFields?: CustomFieldData[];
  /** The datasource profiles of the team */
  datasourceProfiles?: DatasourceProfile[];
  /** the data source of the team, e.g. GDRIVE */
  datasource?: string;
  /** For teams created from docs, the doc title. Otherwise empty. */
  createdFrom?: string;
  /** when this team was last updated. */
  lastUpdatedAt?: Date;
  /**
   * whether this team is fully processed or there are still unprocessed operations that'll affect
   * it
   *
   * @default Status.Processed
   */
  status?: Status;
  /**
   * can this team be deleted. Some manually ingested teams like GCS_CSV or PUSH_API cannot
   *
   * @default true
   */
  canBeDeleted?: boolean;
  /** The logging id of the team used in scrubbed logs, client analytics, and metrics. */
  loggingId?: string;
};

export const teamSchema: Schema<Team> = s.object<Team>({
  relatedObjects: s.optional(
    s.record(
      s.string(),
      s.lazy(() => relatedObjectEdgeSchema),
    ),
  ),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  id: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  businessUnit: s.optional(s.string()),
  department: s.optional(s.string()),
  photoUrl: s.optional(s.string()),
  bannerUrl: s.optional(s.string()),
  externalLink: s.optional(s.string()),
  members: s.optional(s.array(s.lazy(() => personToTeamRelationshipSchema))),
  memberCount: s.optional(s.int()),
  emails: s.optional(s.array(s.lazy(() => teamEmailSchema))),
  customFields: s.optional(s.array(s.lazy(() => customFieldDataSchema))),
  datasourceProfiles: s.optional(s.array(s.lazy(() => datasourceProfileSchema))),
  datasource: s.optional(s.string()),
  createdFrom: s.optional(s.string()),
  lastUpdatedAt: s.optional(s.dateTime()),
  status: s.defaulted(statusSchema, Status.Processed),
  canBeDeleted: s.defaulted(s.boolean(), true),
  loggingId: s.optional(s.string()),
});
