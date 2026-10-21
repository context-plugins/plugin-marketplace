import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerResultSchema, type AnswerResult } from "./answer-result.js";
import { getAnswerErrorSchema, type GetAnswerError } from "./get-answer-error.js";

export type GetAnswerResponse = {
  answerResult?: AnswerResult;
  error?: GetAnswerError;
};

export const getAnswerResponseSchema: Schema<GetAnswerResponse> = s.object<GetAnswerResponse>({
  answerResult: s.optional(s.lazy(() => answerResultSchema)),
  error: s.optional(s.lazy(() => getAnswerErrorSchema)),
});
