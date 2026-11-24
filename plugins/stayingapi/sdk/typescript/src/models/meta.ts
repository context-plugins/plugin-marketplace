import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentSchema, type Environment } from "./environment.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import {
  platformResultInternalSchema,
  platformResultSchema,
  type PlatformResult,
} from "./platform-result.js";
import { platformSchema, type Platform } from "./platform.js";
import { warningInternalSchema, warningSchema, type Warning } from "./warning.js";

/** Canonical response metadata present on every 200 (§6.3.3). */
export type Meta = {
  /** Correlation id (also the X-Request-Id header): req_ + 26-char Crockford ULID. */
  requestId: string;
  platforms: Platform[];
  /**
   * Authenticated key environment used for this response. `test` means deterministic sandbox
   * fixtures, never a live scrape.
   */
  environment?: Environment;
  /** True when the response came from the deterministic sandbox (`stay_test_` key). */
  sandbox?: boolean;
  /** Served fully from cache. Cached results still bill at tier (margin, not discount). */
  cached: boolean;
  /** At least one fan-out leg failed; failed legs are charged 0. */
  partial: boolean;
  creditsCharged: number;
  currency: string;
  pagination?: Pagination | null;
  platformResults?: PlatformResult[];
  warnings?: Warning[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const metaProperties: s.Shape<Meta> = {
  requestId: s.string(),
  platforms: s.array(s.lazy(() => platformSchema)),
  environment: s.optional(s.lazy(() => environmentSchema)),
  sandbox: s.optional(s.boolean()),
  cached: s.boolean(),
  partial: s.boolean(),
  creditsCharged: s.int(),
  currency: s.string(),
  pagination: s.optionalNullable(s.lazy(() => paginationSchema)),
  platformResults: s.optional(s.array(s.lazy(() => platformResultInternalSchema))),
  warnings: s.optional(s.array(s.lazy(() => warningInternalSchema))),
};

export const metaInternalSchema: Schema<Meta> = s.object<Meta>(metaProperties, {
  additionalProperties: s.json(),
});

export const metaSchema: Schema<Meta> = s.lazySchema(() =>
  s.object<Meta>(
    {
      ...metaProperties,
      requestId: s.string().check(s.pattern("^req_[0-9A-HJKMNP-TV-Z]{26}$")),
      creditsCharged: s.int().check(s.gte(0)),
      platformResults: s.optional(s.array(s.lazy(() => platformResultSchema))),
      warnings: s.optional(s.array(s.lazy(() => warningSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
