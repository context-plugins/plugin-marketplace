import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  message?: string;
  error?: string;
  detail?: string;
  /**
   * Machine-readable context on capped responses: the 429 carries `tier`, `limit_per_minute`,
   * `limit_per_day`, `retry_after_seconds`; the archive 403 carries `reason: archive_horizon`,
   * `tier`, `archive_days`. Both include an `upgrade` object (higher tiers' caps + `pricing_url`)
   * for callers below Pro. A 400 caused by an unknown query parameter additionally carries
   * `allowed_params` — the complete list this endpoint accepts, read straight off the endpoint's
   * own schema — plus `docs`, a link to the developer reference. Individual entries in
   * `extra.fields` may carry a did-you-mean hint in their `msg`.
   */
  extra?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    message: s.optional(s.string()),
    error: s.optional(s.string()),
    detail: s.optional(s.string()),
    extra: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
