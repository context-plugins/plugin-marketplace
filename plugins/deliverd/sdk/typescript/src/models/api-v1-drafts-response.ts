import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DraftsResponse = {
  id: string;
  claimUrl: string;
  expiresAt: string;
  warnings: string[];
  /** What to tell the person, in words. */
  next: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DraftsResponseSchema: Schema<ApiV1DraftsResponse> = s.object<ApiV1DraftsResponse>(
  {
    id: s.string(),
    claimUrl: s.string(),
    expiresAt: s.string(),
    warnings: s.array(s.string()),
    next: s.string(),
  },
  { additionalProperties: s.json() },
);
