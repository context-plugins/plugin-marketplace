import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagEventExperimentIteration = {
  /** The experiment iteration ID */
  id: string;
  status: string;
  startedAt: number;
  endedAt?: number;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const flagEventExperimentIterationSchema: Schema<FlagEventExperimentIteration> =
  s.object<FlagEventExperimentIteration>({
    id: s.string(),
    status: s.string(),
    startedAt: s.int(),
    endedAt: s.optional(s.int()),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
