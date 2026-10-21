import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerSchema, type Answer } from "./answer.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";

export type AnswerResult = {
  answer: Answer;
  /**
   * Use `answer.trackingToken` instead.
   *
   * @deprecated
   */
  trackingToken?: string;
  favoriteInfo?: FavoriteInfo;
};

export const answerResultSchema: Schema<AnswerResult> = s.object<AnswerResult>({
  answer: answerSchema,
  trackingToken: s.optional(s.string()),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
});
