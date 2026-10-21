import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientSideAvailabilityPostSchema,
  type ClientSideAvailabilityPost,
} from "./client-side-availability-post.js";
import { customPropertySchema, type CustomProperty } from "./custom-property.js";
import { defaultsSchema, type Defaults } from "./defaults.js";
import { flagPrerequisitePostSchema, type FlagPrerequisitePost } from "./flag-prerequisite-post.js";
import { migrationSettingsPostSchema, type MigrationSettingsPost } from "./migration-settings-post.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { variationSchema, type Variation } from "./variation.js";

export type FeatureFlagBody = {
  /** A human-friendly name for the feature flag */
  name: string;
  /** A unique key used to reference the flag in your code */
  key: string;
  /** Description of the feature flag. Defaults to an empty string. */
  description?: string;
  /**
   * Deprecated, use <code>clientSideAvailability</code>. Whether this flag should be made available
   * to the client-side JavaScript SDK. Defaults to <code>false</code>.
   *
   * @deprecated
   */
  includeInSnippet?: boolean;
  clientSideAvailability?: ClientSideAvailabilityPost;
  /**
   * An array of possible variations for the flag. The variation values must be unique. If omitted,
   * two boolean variations of <code>true</code> and <code>false</code> will be used.
   */
  variations?: Variation[];
  /** Whether the flag is a temporary flag. Defaults to <code>true</code>. */
  temporary?: boolean;
  /** Tags for the feature flag. Defaults to an empty array. */
  tags?: string[];
  customProperties?: Record<string, CustomProperty>;
  defaults?: Defaults;
  /** Purpose of the flag */
  purpose?: Purpose;
  migrationSettings?: MigrationSettingsPost;
  /** The ID of the member who maintains this feature flag */
  maintainerId?: string;
  /** The key of the team that maintains this feature flag */
  maintainerTeamKey?: string;
  /** Initial set of prerequisite flags for all environments */
  initialPrerequisites?: FlagPrerequisitePost[];
  /**
   * Whether to automatically turn the flag on across all environments at creation. Defaults to
   * <code>false</code>.
   */
  isFlagOn?: boolean;
};

export const featureFlagBodySchema: Schema<FeatureFlagBody> = s.object<FeatureFlagBody>({
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  includeInSnippet: s.optional(s.boolean()),
  clientSideAvailability: s.optional(s.lazy(() => clientSideAvailabilityPostSchema)),
  variations: s.optional(s.array(s.lazy(() => variationSchema))),
  temporary: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  customProperties: s.optional(
    s.record(
      s.string(),
      s.lazy(() => customPropertySchema),
    ),
  ),
  defaults: s.optional(s.lazy(() => defaultsSchema)),
  purpose: s.optional(s.lazy(() => purposeSchema)),
  migrationSettings: s.optional(s.lazy(() => migrationSettingsPostSchema)),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  initialPrerequisites: s.optional(s.array(s.lazy(() => flagPrerequisitePostSchema))),
  isFlagOn: s.optional(s.boolean()),
});
