import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSideAvailabilitySchema, type ClientSideAvailability } from "./client-side-availability.js";
import { customPropertySchema, type CustomProperty } from "./custom-property.js";
import { defaultsSchema, type Defaults } from "./defaults.js";
import { experimentInfoRepSchema, type ExperimentInfoRep } from "./experiment-info-rep.js";
import { featureFlagConfigSchema, type FeatureFlagConfig } from "./feature-flag-config.js";
import {
  flagMigrationSettingsRepSchema,
  type FlagMigrationSettingsRep,
} from "./flag-migration-settings-rep.js";
import { kind8Schema, type Kind8 } from "./kind8.js";
import { linkSchema, type Link } from "./link.js";
import { maintainerTeamSchema, type MaintainerTeam } from "./maintainer-team.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { variationSchema, type Variation } from "./variation.js";

export type FeatureFlag = {
  /** A human-friendly name for the feature flag */
  name: string;
  /** Kind of feature flag */
  kind: Kind8;
  /** Description of the feature flag */
  description?: string;
  /** A unique key used to reference the flag in your code */
  key: string;
  /** Version of the feature flag */
  version: number;
  creationDate: number;
  /**
   * Deprecated, use <code>clientSideAvailability</code>. Whether this flag should be made available
   * to the client-side JavaScript SDK
   *
   * @deprecated
   */
  includeInSnippet?: boolean;
  clientSideAvailability?: ClientSideAvailability;
  /** An array of possible variations for the flag */
  variations: Variation[];
  /** Whether the flag is a temporary flag */
  temporary: boolean;
  /** Tags for the feature flag */
  tags: string[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** Associated maintainerId for the feature flag */
  maintainerId?: string;
  maintainer?: MemberSummary;
  /** The key of the associated team that maintains this feature flag */
  maintainerTeamKey?: string;
  maintainerTeam?: MaintainerTeam;
  /**
   * Deprecated, use <code>experiments</code> instead
   *
   * @deprecated
   */
  goalIds?: string[];
  experiments: ExperimentInfoRep;
  customProperties: Record<string, CustomProperty>;
  /** Boolean indicating if the feature flag is archived */
  archived: boolean;
  archivedDate?: number;
  /** Boolean indicating if the feature flag is deprecated */
  deprecated?: boolean;
  deprecatedDate?: number;
  defaults?: Defaults;
  purpose?: string;
  migrationSettings?: FlagMigrationSettingsRep;
  /**
   * Details on the environments for this flag. Only returned if the request is filtered by
   * environment, using the <code>filterEnv</code> query parameter.
   */
  environments?: Record<string, FeatureFlagConfig>;
};

export const featureFlagSchema: Schema<FeatureFlag> = s.object<FeatureFlag>({
  name: s.string(),
  kind: kind8Schema,
  description: s.optional(s.string()),
  key: s.string(),
  version: s.int(),
  creationDate: s.int(),
  includeInSnippet: s.optional(s.boolean()),
  clientSideAvailability: s.optional(s.lazy(() => clientSideAvailabilitySchema)),
  variations: s.array(s.lazy(() => variationSchema)),
  temporary: s.boolean(),
  tags: s.array(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  maintainerId: s.optional(s.string()),
  maintainer: s.optional(s.lazy(() => memberSummarySchema)),
  maintainerTeamKey: s.optional(s.string()),
  maintainerTeam: s.optional(s.lazy(() => maintainerTeamSchema)),
  goalIds: s.optional(s.array(s.string())),
  experiments: experimentInfoRepSchema,
  customProperties: s.record(
    s.string(),
    s.lazy(() => customPropertySchema),
  ),
  archived: s.boolean(),
  archivedDate: s.optional(s.int()),
  deprecated: s.optional(s.boolean()),
  deprecatedDate: s.optional(s.int()),
  defaults: s.optional(s.lazy(() => defaultsSchema)),
  purpose: s.optional(s.string()),
  migrationSettings: s.optional(s.lazy(() => flagMigrationSettingsRepSchema)),
  environments: s.optional(
    s.record(
      s.string(),
      s.lazy(() => featureFlagConfigSchema),
    ),
  ),
  _keysMap: {
    version: "_version",
    links: "_links",
    maintainer: "_maintainer",
    maintainerTeam: "_maintainerTeam",
    purpose: "_purpose",
  },
});
