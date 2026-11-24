import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1OrganizationUsageCommentsResponse = {
  used: number;
  limit: number;
  remaining: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1OrganizationUsageCommentsResponseSchema: Schema<ApiV1OrganizationUsageCommentsResponse> =
  s.object<ApiV1OrganizationUsageCommentsResponse>(
    {
      used: s.float64(),
      limit: s.float64(),
      remaining: s.float64(),
    },
    { additionalProperties: s.json() },
  );
