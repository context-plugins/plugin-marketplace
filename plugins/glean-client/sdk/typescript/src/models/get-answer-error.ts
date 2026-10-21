import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorTypeSchema, type ErrorType } from "./error-type.js";
import { personSchema, type Person } from "./person.js";

export type GetAnswerError = {
  errorType?: ErrorType;
  answerAuthor?: Person;
};

export const getAnswerErrorSchema: Schema<GetAnswerError> = s.object<GetAnswerError>({
  errorType: s.optional(s.lazy(() => errorTypeSchema)),
  answerAuthor: s.optional(s.lazy(() => personSchema)),
});
