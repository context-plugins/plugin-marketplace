import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerLikeSchema, type AnswerLike } from "./answer-like.js";

export type AnswerLikes = {
  likedBy: AnswerLike[];
  /** Whether the user in context liked the answer. */
  likedByUser: boolean;
  /** The total number of likes for the answer. */
  numLikes: number;
};

export const answerLikesSchema: Schema<AnswerLikes> = s.object<AnswerLikes>({
  likedBy: s.array(s.lazy(() => answerLikeSchema)),
  likedByUser: s.boolean(),
  numLikes: s.int(),
});
