import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSummaryInternalSchema, buildSummarySchema, type BuildSummary } from "./build-summary.js";

export type Branches = {
  /** Recent builds on this branch */
  recentBuilds?: BuildSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const branchesProperties: s.Shape<Branches> = {
  recentBuilds: s.optional(s.array(s.lazy(() => buildSummaryInternalSchema))),
  _keysMap: {
    recentBuilds: "recent_builds",
  },
};

export const branchesInternalSchema: Schema<Branches> = s.object<Branches>(branchesProperties, {
  additionalProperties: s.json(),
});

export const branchesSchema: Schema<Branches> = s.lazySchema(() =>
  s.object<Branches>(
    {
      ...branchesProperties,
      recentBuilds: s.optional(s.array(s.lazy(() => buildSummarySchema))),
    },
    { additionalProperties: s.json() },
  ),
);
