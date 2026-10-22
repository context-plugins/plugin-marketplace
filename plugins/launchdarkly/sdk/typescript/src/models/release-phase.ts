import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { completedBySchema, type CompletedBy } from "./completed-by.js";
import { releaseAudienceSchema, type ReleaseAudience } from "./release-audience.js";

export type ReleasePhase = {
  /** The phase ID */
  id: string;
  /** The release phase name */
  name: string;
  /** Whether this phase is complete */
  complete: boolean;
  creationDate: number;
  completionDate?: number;
  completedBy?: CompletedBy;
  /**
   * A logical grouping of one or more environments that share attributes for rolling out changes
   */
  audiences: ReleaseAudience[];
  status?: string;
  /** Whether or not this phase has started */
  started?: boolean;
  startedDate?: number;
  configuration?: Record<string, unknown>;
};

export const releasePhaseSchema: Schema<ReleasePhase> = s.object<ReleasePhase>({
  id: s.string(),
  name: s.string(),
  complete: s.boolean(),
  creationDate: s.int(),
  completionDate: s.optional(s.int()),
  completedBy: s.optional(s.lazy(() => completedBySchema)),
  audiences: s.array(s.lazy(() => releaseAudienceSchema)),
  status: s.optional(s.string()),
  started: s.optional(s.boolean()),
  startedDate: s.optional(s.int()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    id: "_id",
    name: "_name",
    creationDate: "_creationDate",
    completionDate: "_completionDate",
    completedBy: "_completedBy",
    audiences: "_audiences",
    startedDate: "_startedDate",
  },
});
