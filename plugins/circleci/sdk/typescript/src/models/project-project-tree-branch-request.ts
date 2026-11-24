import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectProjectTreeBranchRequest = {
  /** Number of parallel containers */
  parallel?: number;
  /** The specific revision to build */
  revision?: string;
  /** Additional build parameters */
  buildParameters?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectTreeBranchRequestSchema: Schema<ProjectProjectTreeBranchRequest> =
  s.object<ProjectProjectTreeBranchRequest>(
    {
      parallel: s.optional(s.int()),
      revision: s.optional(s.string()),
      buildParameters: s.optional(s.record(s.string(), s.string())),
      _keysMap: {
        buildParameters: "build_parameters",
      },
    },
    { additionalProperties: s.json() },
  );
