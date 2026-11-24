import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaCheckResponseSchema, type QaCheckResponse } from "./qa-check-response.js";

export type QaCheckListResponse = {
  checks: QaCheckResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qaCheckListResponseSchema: Schema<QaCheckListResponse> = s.object<QaCheckListResponse>(
  {
    checks: s.array(s.lazy(() => qaCheckResponseSchema)),
  },
  { additionalProperties: s.json() },
);
