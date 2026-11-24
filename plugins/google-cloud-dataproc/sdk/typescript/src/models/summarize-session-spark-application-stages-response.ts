import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stagesSummary1Schema, type StagesSummary1 } from "./stages-summary1.js";

/** Summary of a Spark Application stages. */
export type SummarizeSessionSparkApplicationStagesResponse = {
  /** Summary of a Spark Application Stages */
  stagesSummary?: StagesSummary1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSessionSparkApplicationStagesResponseSchema: Schema<SummarizeSessionSparkApplicationStagesResponse> =
  s.object<SummarizeSessionSparkApplicationStagesResponse>(
    {
      stagesSummary: s.optional(s.lazy(() => stagesSummary1Schema)),
    },
    { additionalProperties: s.json() },
  );
