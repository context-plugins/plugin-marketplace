import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { approvalSettingsSchema, type ApprovalSettings } from "./approval-settings.js";
import { linkSchema, type Link } from "./link.js";

export type Environment = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /**
   * The ID for the environment. Use this as the client-side ID for authorization in some
   * client-side SDKs, and to associate LaunchDarkly environments with CDN integrations in edge
   * SDKs.
   */
  id: string;
  /** A project-unique key for the new environment */
  key: string;
  /** A human-friendly name for the new environment */
  name: string;
  /** The SDK key for the environment. Use this for authorization in server-side SDKs. */
  apiKey: string;
  /** The mobile key for the environment. Use this for authorization in mobile SDKs. */
  mobileKey: string;
  /** The color used to indicate this environment in the UI */
  color: string;
  /** The default time (in minutes) that the PHP SDK can cache feature flag rules locally */
  defaultTtl: number;
  /**
   * Ensures that one end user of the client-side SDK cannot inspect the variations for another end
   * user
   */
  secureMode: boolean;
  access?: Access;
  /** Enables tracking detailed information for new flags by default */
  defaultTrackEvents: boolean;
  /**
   * Whether members who modify flags and segments through the LaunchDarkly user interface are
   * required to add a comment
   */
  requireComments: boolean;
  /**
   * Whether members who modify flags and segments through the LaunchDarkly user interface are
   * required to confirm those changes
   */
  confirmChanges: boolean;
  /** A list of tags for this environment */
  tags: string[];
  approvalSettings?: ApprovalSettings;
  /** Details on the approval settings for this environment for each resource kind */
  resourceApprovalSettings?: Record<string, ApprovalSettings>;
  /** Whether the environment is critical */
  critical: boolean;
};

export const environmentSchema: Schema<Environment> = s.object<Environment>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  id: s.string(),
  key: s.string(),
  name: s.string(),
  apiKey: s.string(),
  mobileKey: s.string(),
  color: s.string(),
  defaultTtl: s.int(),
  secureMode: s.boolean(),
  access: s.optional(s.lazy(() => accessSchema)),
  defaultTrackEvents: s.boolean(),
  requireComments: s.boolean(),
  confirmChanges: s.boolean(),
  tags: s.array(s.string()),
  approvalSettings: s.optional(s.lazy(() => approvalSettingsSchema)),
  resourceApprovalSettings: s.optional(
    s.record(
      s.string(),
      s.lazy(() => approvalSettingsSchema),
    ),
  ),
  critical: s.boolean(),
  _keysMap: {
    links: "_links",
    id: "_id",
    access: "_access",
  },
});
