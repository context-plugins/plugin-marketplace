import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoreScaleSchema, type ScoreScale } from "./score-scale.js";

export type ImsOnerosterGradebookV1P2ScoreScalesResponse2 = {
  /** Represents a score scale. */
  scoreScale: ScoreScale;
};

export const imsOnerosterGradebookV1P2ScoreScalesResponse2Schema: Schema<ImsOnerosterGradebookV1P2ScoreScalesResponse2> =
  s.object<ImsOnerosterGradebookV1P2ScoreScalesResponse2>({
    scoreScale: scoreScaleSchema,
  });
