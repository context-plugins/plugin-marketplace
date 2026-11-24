import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { spendLimitItemSchema, type SpendLimitItem } from "./spend-limit-item.js";

export type SpendLimitListResponse = {
  limits: SpendLimitItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spendLimitListResponseSchema: Schema<SpendLimitListResponse> = s.object<SpendLimitListResponse>(
  {
    limits: s.array(s.lazy(() => spendLimitItemSchema)),
  },
  { additionalProperties: s.json() },
);
