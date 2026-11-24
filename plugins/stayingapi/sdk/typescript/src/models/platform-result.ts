import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformFailureErrorInternalSchema,
  platformFailureErrorSchema,
  type PlatformFailureError,
} from "./platform-failure-error.js";
import { platformSchema, type Platform } from "./platform.js";
import { reasonSchema, type Reason } from "./reason.js";
import { statusStayingDataApiSchema, type StatusStayingDataApi } from "./status-staying-data-api.js";

export type PlatformResult = {
  platform?: Platform;
  status?: StatusStayingDataApi;
  /** Present on skipped platform results; explains why a requested platform was not called. */
  reason?: Reason;
  creditsCharged?: number;
  cached?: boolean;
  count?: number;
  error?: PlatformFailureError;
  /** Human-readable reason for skipped platform results. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const platformResultProperties: s.Shape<PlatformResult> = {
  platform: s.optional(s.lazy(() => platformSchema)),
  status: s.optional(s.lazy(() => statusStayingDataApiSchema)),
  reason: s.optional(s.lazy(() => reasonSchema)),
  creditsCharged: s.optional(s.int()),
  cached: s.optional(s.boolean()),
  count: s.optional(s.int()),
  error: s.optional(s.lazy(() => platformFailureErrorInternalSchema)),
  message: s.optional(s.string()),
};

export const platformResultInternalSchema: Schema<PlatformResult> = s.object<PlatformResult>(
  platformResultProperties,
  { additionalProperties: s.json() },
);

export const platformResultSchema: Schema<PlatformResult> = s.lazySchema(() =>
  s.object<PlatformResult>(
    {
      ...platformResultProperties,
      creditsCharged: s.optional(s.int().check(s.gte(0))),
      count: s.optional(s.int().check(s.gte(0))),
      error: s.optional(s.lazy(() => platformFailureErrorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
