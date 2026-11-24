import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageData1Schema, type StageData1 } from "./stage-data1.js";

/** Stage Attempt for a Stage of a Spark Application */
export type AccessSparkApplicationStageAttemptResponse = {
  /** Output only. Data corresponding to a stage. */
  stageData?: StageData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationStageAttemptResponseSchema: Schema<AccessSparkApplicationStageAttemptResponse> =
  s.object<AccessSparkApplicationStageAttemptResponse>(
    {
      stageData: s.optional(s.lazy(() => stageData1Schema)),
    },
    { additionalProperties: s.json() },
  );
