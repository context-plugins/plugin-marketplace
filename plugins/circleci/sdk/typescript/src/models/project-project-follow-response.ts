import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSummaryInternalSchema, buildSummarySchema, type BuildSummary } from "./build-summary.js";

export type ProjectProjectFollowResponse = {
  /** Whether the project is now being followed */
  following?: boolean;
  firstBuild?: BuildSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectProjectFollowResponseProperties: s.Shape<ProjectProjectFollowResponse> = {
  following: s.optional(s.boolean()),
  firstBuild: s.optional(s.lazy(() => buildSummaryInternalSchema)),
  _keysMap: {
    firstBuild: "first_build",
  },
};

export const projectProjectFollowResponseInternalSchema: Schema<ProjectProjectFollowResponse> =
  s.object<ProjectProjectFollowResponse>(projectProjectFollowResponseProperties, {
    additionalProperties: s.json(),
  });

export const projectProjectFollowResponseSchema: Schema<ProjectProjectFollowResponse> = s.lazySchema(() =>
  s.object<ProjectProjectFollowResponse>(
    {
      ...projectProjectFollowResponseProperties,
      firstBuild: s.optional(s.lazy(() => buildSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
