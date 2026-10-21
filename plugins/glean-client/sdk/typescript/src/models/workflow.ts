import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";

export type Workflow = {
  permissions?: ObjectPermissions;
  /** The name of the workflow. */
  name?: string;
  author?: Person;
  /** Server Unix timestamp of the creation time. */
  createTimestamp?: number;
  /** Server Unix timestamp of the last update time. */
  lastUpdateTimestamp?: number;
  /** Server Unix timestamp of the last time the draft was saved. */
  lastDraftSavedAt?: number;
  lastDraftSavedBy?: Person;
  /**
   * ID of the VCS user (e.g. GitHub username) who last saved the draft. Set only by the draft save
   * path via the external Git integration API.
   */
  lastDraftGitAuthorId?: string;
  lastUpdatedBy?: Person;
  /** The ID of the workflow. */
  id?: string;
  /**
   * When present, indicates this workflow is admin-verified. Set via the dedicated admin settings
   * endpoint, not by regular edits.
   */
  verified?: boolean;
  /**
   * When true, displays organization name instead of author name in agent card. Set via the
   * dedicated admin settings endpoint, not by regular edits.
   */
  showOrganizationAsAuthor?: boolean;
  /**
   * For a CUSTOM_WEBHOOK-triggered agent, the full inbound webhook URL
   * (.../webhooks/custom/<token>) minted for the agent. Empty for other trigger types.
   */
  webhookUrl?: string;
};

export const workflowSchema: Schema<Workflow> = s.object<Workflow>({
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  name: s.optional(s.string()),
  author: s.optional(s.lazy(() => personSchema)),
  createTimestamp: s.optional(s.int()),
  lastUpdateTimestamp: s.optional(s.int()),
  lastDraftSavedAt: s.optional(s.int()),
  lastDraftSavedBy: s.optional(s.lazy(() => personSchema)),
  lastDraftGitAuthorId: s.optional(s.string()),
  lastUpdatedBy: s.optional(s.lazy(() => personSchema)),
  id: s.optional(s.string()),
  verified: s.optional(s.boolean()),
  showOrganizationAsAuthor: s.optional(s.boolean()),
  webhookUrl: s.optional(s.string()),
});
