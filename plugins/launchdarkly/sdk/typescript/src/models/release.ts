import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { releasePhaseSchema, type ReleasePhase } from "./release-phase.js";

export type Release = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The release pipeline name */
  name: string;
  /** The release pipeline key */
  releasePipelineKey: string;
  /** The release pipeline description */
  releasePipelineDescription: string;
  /** An ordered list of the release pipeline phases */
  phases: ReleasePhase[];
  /** The release version */
  version: number;
  /** The chosen release variation ID to use across all phases of a release */
  releaseVariationId?: string;
  canceledAt?: number;
};

export const releaseSchema: Schema<Release> = s.object<Release>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.string(),
  releasePipelineKey: s.string(),
  releasePipelineDescription: s.string(),
  phases: s.array(s.lazy(() => releasePhaseSchema)),
  version: s.int(),
  releaseVariationId: s.optional(s.string()),
  canceledAt: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    version: "_version",
    releaseVariationId: "_releaseVariationId",
    canceledAt: "_canceledAt",
  },
});
