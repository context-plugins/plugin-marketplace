import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoreScaleSchema, type ScoreScale } from "./score-scale.js";

export type ImsOnerosterGradebookV1P2ScoreScalesRequest = {
  /** Represents a score scale. */
  scoreScale: ScoreScale;
};

export const imsOnerosterGradebookV1P2ScoreScalesRequestSchema: Schema<ImsOnerosterGradebookV1P2ScoreScalesRequest> =
  s.object<ImsOnerosterGradebookV1P2ScoreScalesRequest>({
    scoreScale: scoreScaleSchema,
  });
