import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectProjectRequest = {
  /** The tag to build */
  tag?: string;
  /** The specific revision to build */
  revision?: string;
  /** The branch to build */
  branch?: string;
  /** Number of parallel containers */
  parallel?: number;
  /** Additional build parameters */
  buildParameters?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectRequestSchema: Schema<ProjectProjectRequest> = s.object<ProjectProjectRequest>(
  {
    tag: s.optional(s.string()),
    revision: s.optional(s.string()),
    branch: s.optional(s.string()),
    parallel: s.optional(s.int()),
    buildParameters: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      buildParameters: "build_parameters",
    },
  },
  { additionalProperties: s.json() },
);
