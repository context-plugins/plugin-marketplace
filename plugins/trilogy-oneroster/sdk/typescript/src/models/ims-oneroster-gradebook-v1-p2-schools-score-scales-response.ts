import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoreScaleSchema, type ScoreScale } from "./score-scale.js";

export type ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse = {
  scoreScales: ScoreScale[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2SchoolsScoreScalesResponseSchema: Schema<ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse> =
  s.object<ImsOnerosterGradebookV1P2SchoolsScoreScalesResponse>({
    scoreScales: s.array(s.lazy(() => scoreScaleSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
