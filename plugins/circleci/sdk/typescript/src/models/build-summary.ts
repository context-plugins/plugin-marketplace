import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildSummary = {
  /** URL to view the build */
  buildUrl?: string;
  /** The build number */
  buildNum?: number;
  /** The build status */
  status?: string;
  /** The VCS revision */
  vcsRevision?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildSummaryProperties: s.Shape<BuildSummary> = {
  buildUrl: s.optional(s.string()),
  buildNum: s.optional(s.int()),
  status: s.optional(s.string()),
  vcsRevision: s.optional(s.string()),
  _keysMap: {
    buildUrl: "build_url",
    buildNum: "build_num",
    vcsRevision: "vcs_revision",
  },
};

export const buildSummaryInternalSchema: Schema<BuildSummary> = s.object<BuildSummary>(
  buildSummaryProperties,
  { additionalProperties: s.json() },
);

export const buildSummarySchema: Schema<BuildSummary> = s.lazySchema(() =>
  s.object<BuildSummary>(
    {
      ...buildSummaryProperties,
      buildUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
