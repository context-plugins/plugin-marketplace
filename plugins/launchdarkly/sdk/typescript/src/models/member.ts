import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { integrationMetadataSchema, type IntegrationMetadata } from "./integration-metadata.js";
import { lastSeenMetadataSchema, type LastSeenMetadata } from "./last-seen-metadata.js";
import { linkSchema, type Link } from "./link.js";
import {
  memberPermissionGrantSummaryRepSchema,
  type MemberPermissionGrantSummaryRep,
} from "./member-permission-grant-summary-rep.js";
import { memberTeamSummaryRepSchema, type MemberTeamSummaryRep } from "./member-team-summary-rep.js";

export type Member = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The member's ID */
  id: string;
  /** The member's first name */
  firstName?: string;
  /** The member's last name */
  lastName?: string;
  /** The member's base role. If the member has no additional roles, this role will be in effect. */
  role: string;
  /** The member's email address */
  email: string;
  /** Whether the member has a pending invitation */
  pendingInvite: boolean;
  /** Whether the member's email address has been verified */
  verified: boolean;
  /**
   * The member's email address before it has been verified, for accounts where email verification
   * is required
   */
  pendingEmail?: string;
  /** The set of additional roles, besides the base role, assigned to the member */
  customRoles: string[];
  /** Whether multi-factor authentication is enabled for this member */
  mfa: string;
  /** Default dashboards that the member has chosen to ignore */
  excludedDashboards?: string[];
  lastSeen: number;
  lastSeenMetadata?: LastSeenMetadata;
  integrationMetadata?: IntegrationMetadata;
  /** Details on the teams this member is assigned to */
  teams?: MemberTeamSummaryRep[];
  /**
   * A list of permission grants. Permission grants allow a member to have access to a specific
   * action, without having to create or update a custom role.
   */
  permissionGrants?: MemberPermissionGrantSummaryRep[];
  creationDate: number;
  /** A list of OAuth providers */
  oauthProviders?: string[];
  /** Version of the current configuration */
  version?: number;
  roleAttributes?: Record<string, Record<string, unknown>>;
};

export const memberSchema: Schema<Member> = s.object<Member>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  id: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  role: s.string(),
  email: s.string(),
  pendingInvite: s.boolean(),
  verified: s.boolean(),
  pendingEmail: s.optional(s.string()),
  customRoles: s.array(s.string()),
  mfa: s.string(),
  excludedDashboards: s.optional(s.array(s.string())),
  lastSeen: s.int(),
  lastSeenMetadata: s.optional(s.lazy(() => lastSeenMetadataSchema)),
  integrationMetadata: s.optional(s.lazy(() => integrationMetadataSchema)),
  teams: s.optional(s.array(s.lazy(() => memberTeamSummaryRepSchema))),
  permissionGrants: s.optional(s.array(s.lazy(() => memberPermissionGrantSummaryRepSchema))),
  creationDate: s.int(),
  oauthProviders: s.optional(s.array(s.string())),
  version: s.optional(s.int()),
  roleAttributes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    links: "_links",
    id: "_id",
    pendingInvite: "_pendingInvite",
    verified: "_verified",
    pendingEmail: "_pendingEmail",
    lastSeen: "_lastSeen",
    lastSeenMetadata: "_lastSeenMetadata",
    integrationMetadata: "_integrationMetadata",
  },
});
