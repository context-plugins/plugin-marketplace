import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { phaseInfoSchema, type PhaseInfo } from "./phase-info.js";
import { releaseProgressionSchema, type ReleaseProgression } from "./release-progression.js";

export type ReleaseProgressionCollection = {
  /** The number of active releases */
  activeCount: number;
  /** The number of completed releases */
  completedCount: number;
  /** A list of details for each release, across all flags, for this release pipeline */
  items: ReleaseProgression[];
  /** A list of details for each phase, across all releases, for this release pipeline */
  phases: PhaseInfo[];
  /** The total number of releases for this release pipeline */
  totalCount: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const releaseProgressionCollectionSchema: Schema<ReleaseProgressionCollection> =
  s.object<ReleaseProgressionCollection>({
    activeCount: s.int(),
    completedCount: s.int(),
    items: s.array(s.lazy(() => releaseProgressionSchema)),
    phases: s.array(s.lazy(() => phaseInfoSchema)),
    totalCount: s.int(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
