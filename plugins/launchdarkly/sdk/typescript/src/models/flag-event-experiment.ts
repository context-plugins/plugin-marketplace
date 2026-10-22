import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flagEventExperimentIterationSchema,
  type FlagEventExperimentIteration,
} from "./flag-event-experiment-iteration.js";
import { linkSchema, type Link } from "./link.js";

export type FlagEventExperiment = {
  /** The experiment key */
  key: string;
  /** The experiment name */
  name: string;
  iteration: FlagEventExperimentIteration;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const flagEventExperimentSchema: Schema<FlagEventExperiment> = s.object<FlagEventExperiment>({
  key: s.string(),
  name: s.string(),
  iteration: flagEventExperimentIterationSchema,
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
