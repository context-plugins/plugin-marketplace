import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentResultSchema, type AssessmentResult } from "./assessment-result.js";

export type ImsOnerosterGradebookV1P2AssessmentResultsResponse = {
  assessmentResults: AssessmentResult[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2AssessmentResultsResponseSchema: Schema<ImsOnerosterGradebookV1P2AssessmentResultsResponse> =
  s.object<ImsOnerosterGradebookV1P2AssessmentResultsResponse>({
    assessmentResults: s.array(s.lazy(() => assessmentResultSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
