import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentSchema, type Experiment } from "./experiment.js";
import { linkSchema, type Link } from "./link.js";

export type ExperimentCollectionRep = {
  /** An array of experiments */
  items: Experiment[];
  /**
   * The total number of experiments in this project and environment. Does not include legacy
   * experiments.
   */
  totalCount?: number;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const experimentCollectionRepSchema: Schema<ExperimentCollectionRep> =
  s.object<ExperimentCollectionRep>({
    items: s.array(s.lazy(() => experimentSchema)),
    totalCount: s.optional(s.int()),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      totalCount: "total_count",
      links: "_links",
    },
  });
