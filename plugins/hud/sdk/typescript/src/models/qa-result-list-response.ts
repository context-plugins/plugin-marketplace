import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  qaResultResponseInternalSchema,
  qaResultResponseSchema,
  type QaResultResponse,
} from "./qa-result-response.js";

export type QaResultListResponse = {
  results: QaResultResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaResultListResponseProperties: s.Shape<QaResultListResponse> = {
  results: s.array(s.lazy(() => qaResultResponseInternalSchema)),
};

export const qaResultListResponseInternalSchema: Schema<QaResultListResponse> =
  s.object<QaResultListResponse>(qaResultListResponseProperties, { additionalProperties: s.json() });

export const qaResultListResponseSchema: Schema<QaResultListResponse> = s.lazySchema(() =>
  s.object<QaResultListResponse>(
    {
      ...qaResultListResponseProperties,
      results: s.array(s.lazy(() => qaResultResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
