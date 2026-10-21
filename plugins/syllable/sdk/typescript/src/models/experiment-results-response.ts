import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentVariantResultSchema, type ExperimentVariantResult } from "./experiment-variant-result.js";

/** What an experiment has collected so far. */
export type ExperimentResultsResponse = {
  /** The internal ID of the experiment */
  experimentId: number;
  /** The variants of the experiment, in the same order as the experiment lists them */
  variants: ExperimentVariantResult[];
};

export const experimentResultsResponseSchema: Schema<ExperimentResultsResponse> =
  s.object<ExperimentResultsResponse>({
    experimentId: s.int(),
    variants: s.array(s.lazy(() => experimentVariantResultSchema)),
    _keysMap: {
      experimentId: "experiment_id",
    },
  });
