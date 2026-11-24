import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsCommentsRequest = {
  body: string;
  quote?: string;
  threadId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsCommentsRequestProperties: s.Shape<ApiV1ReportsCommentsRequest> = {
  body: s.string(),
  quote: s.optional(s.string()),
  threadId: s.optional(s.string()),
};

export const apiV1ReportsCommentsRequestInternalSchema: Schema<ApiV1ReportsCommentsRequest> =
  s.object<ApiV1ReportsCommentsRequest>(apiV1ReportsCommentsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsCommentsRequestSchema: Schema<ApiV1ReportsCommentsRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsCommentsRequest>(
    {
      ...apiV1ReportsCommentsRequestProperties,
      body: s.string().check(s.minLength(1), s.maxLength(10000)),
      quote: s.optional(s.string().check(s.minLength(1), s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
