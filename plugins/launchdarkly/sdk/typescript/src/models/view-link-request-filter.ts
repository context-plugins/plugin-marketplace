import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewLinkRequestFilter = {
  /**
   * Filter string to match resources for linking. Uses the same syntax as list endpoints: flags use
   * comma-separated field:value filters, segments use queryfilter syntax.
   *
   * Supported filters by resource type:
   * - flags: query, tags, maintainerId, maintainerTeamKey, type, status, state, staleState,
   *   sdkAvailability, targeting, hasExperiment, hasDataExport, evaluated, creationDate,
   *   contextKindTargeted, contextKindsEvaluated, filterEnv, segmentTargeted, codeReferences.min,
   *   codeReferences.max, excludeSettings, releasePipeline, applicationEvaluated, purpose,
   *   guardedRollout, view, key, name, archived, followerId
   * - segments (queryfilter): query, tags, keys, excludedKeys, unbounded, external, view, type Some
   *   filters are only available when the corresponding feature is enabled on your account.
   */
  filter: string;
  /**
   * Required when using filter for segment resources. Specifies which environment to query for
   * segments matching the filter. Ignored for flag resources (flags are global across
   * environments).
   */
  environmentId?: string;
  /** Optional comment for the link/unlink operation */
  comment?: string;
};

export const viewLinkRequestFilterSchema: Schema<ViewLinkRequestFilter> = s.object<ViewLinkRequestFilter>({
  filter: s.string(),
  environmentId: s.optional(s.string()),
  comment: s.optional(s.string()),
});
