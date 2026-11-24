import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSummarySchema, type BuildSummary } from "./build-summary.js";

export type BuildGroup = {
  /** Contains the identifier of the build group. */
  identifier?: string;
  /**
   * An array of strings that contain the identifiers of the build groups that this build group
   * depends on.
   */
  dependsOn?: string[];
  /** Specifies if failures in this build group can be ignored. */
  ignoreFailure?: boolean;
  currentBuildSummary?: BuildSummary;
  /** An array of BuildSummary objects that contain summaries of previous build groups. */
  priorBuildSummaryList?: BuildSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildGroupSchema: Schema<BuildGroup> = s.object<BuildGroup>(
  {
    identifier: s.optional(s.string()),
    dependsOn: s.optional(s.array(s.string())),
    ignoreFailure: s.optional(s.boolean()),
    currentBuildSummary: s.optional(s.lazy(() => buildSummarySchema)),
    priorBuildSummaryList: s.optional(s.array(s.lazy(() => buildSummarySchema))),
  },
  { additionalProperties: s.json() },
);
