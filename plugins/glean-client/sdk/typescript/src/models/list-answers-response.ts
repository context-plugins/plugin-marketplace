import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerResultSchema, type AnswerResult } from "./answer-result.js";

export type ListAnswersResponse = {
  /** List of answers with tracking tokens. */
  answerResults: AnswerResult[];
};

export const listAnswersResponseSchema: Schema<ListAnswersResponse> = s.object<ListAnswersResponse>({
  answerResults: s.array(s.lazy(() => answerResultSchema)),
});
