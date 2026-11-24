import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ApprovalsAnswersRequest = {
  questionId: string;
  answer: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ApprovalsAnswersRequestProperties: s.Shape<ApiV1ApprovalsAnswersRequest> = {
  questionId: s.string(),
  answer: s.string(),
};

export const apiV1ApprovalsAnswersRequestInternalSchema: Schema<ApiV1ApprovalsAnswersRequest> =
  s.object<ApiV1ApprovalsAnswersRequest>(apiV1ApprovalsAnswersRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ApprovalsAnswersRequestSchema: Schema<ApiV1ApprovalsAnswersRequest> = s.lazySchema(() =>
  s.object<ApiV1ApprovalsAnswersRequest>(
    {
      ...apiV1ApprovalsAnswersRequestProperties,
      answer: s.string().check(s.minLength(1), s.maxLength(4000)),
    },
    { additionalProperties: s.json() },
  ),
);
