import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { phaseSchema, type Phase } from "./phase.js";

export type ReleasePipeline = {
  /** Timestamp of when the release pipeline was created */
  createdAt: Date;
  /** The release pipeline description */
  description?: string;
  /** The release pipeline key */
  key: string;
  /** The release pipeline name */
  name: string;
  /**
   * An ordered list of the release pipeline phases. Each phase is a logical grouping of one or more
   * environments that share attributes for rolling out changes.
   */
  phases: Phase[];
  /** A list of the release pipeline's tags */
  tags?: string[];
  /** The release pipeline version */
  version?: number;
  access?: Access;
  /** Whether this release pipeline is the default pipeline for the project */
  isProjectDefault?: boolean;
  /** Whether this release pipeline is a legacy pipeline */
  isLegacy?: boolean;
};

export const releasePipelineSchema: Schema<ReleasePipeline> = s.object<ReleasePipeline>({
  createdAt: s.dateTime(),
  description: s.optional(s.string()),
  key: s.string(),
  name: s.string(),
  phases: s.array(s.lazy(() => phaseSchema)),
  tags: s.optional(s.array(s.string())),
  version: s.optional(s.int()),
  access: s.optional(s.lazy(() => accessSchema)),
  isProjectDefault: s.optional(s.boolean()),
  isLegacy: s.optional(s.boolean()),
  _keysMap: {
    version: "_version",
    access: "_access",
    isLegacy: "_isLegacy",
  },
});
