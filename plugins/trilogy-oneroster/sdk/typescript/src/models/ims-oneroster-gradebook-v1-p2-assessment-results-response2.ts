import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentResultSchema, type AssessmentResult } from "./assessment-result.js";

export type ImsOnerosterGradebookV1P2AssessmentResultsResponse2 = {
  /** Represents an assessment result. */
  assessmentResult: AssessmentResult;
};

export const imsOnerosterGradebookV1P2AssessmentResultsResponse2Schema: Schema<ImsOnerosterGradebookV1P2AssessmentResultsResponse2> =
  s.object<ImsOnerosterGradebookV1P2AssessmentResultsResponse2>({
    assessmentResult: assessmentResultSchema,
  });
