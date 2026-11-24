import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiLimitsDtoSchema, type ApiLimitsDto } from "./api-limits-dto.js";

/** API usage and limits response. */
export type LimitsResult = {
  /**
   * Current API usage and limits for the authenticated account, optionally including the status of
   * additional API keys that were requested. Reading this does not count against the account's
   * request quota or rate limit.
   */
  data: ApiLimitsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitsResultSchema: Schema<LimitsResult> = s.object<LimitsResult>(
  {
    data: apiLimitsDtoSchema,
  },
  { additionalProperties: s.json() },
);
