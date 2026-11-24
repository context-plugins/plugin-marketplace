import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customInternalSchema, customSchema, type Custom } from "./custom.js";
import { defaultSchema, type Default } from "./default.js";

/**
 * Payload for upserting application bypass entries. At least one of `custom` or `default` must be
 * provided. Under each, at least one of `mac` or `windows` must be provided. Unmentioned custom
 * entries are preserved. Unknown default entry names are silently ignored.
 */
export type ApplicationBypassUpdateBody = {
  /** Custom application entries to upsert (matched by name), keyed by platform. */
  custom?: Custom;
  /**
   * Default application entries with updated toggle states (matched by name), keyed by platform.
   */
  default?: Default;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const applicationBypassUpdateBodyProperties: s.Shape<ApplicationBypassUpdateBody> = {
  custom: s.optional(s.lazy(() => customInternalSchema)),
  default: s.optional(s.lazy(() => defaultSchema)),
};

export const applicationBypassUpdateBodyInternalSchema: Schema<ApplicationBypassUpdateBody> =
  s.object<ApplicationBypassUpdateBody>(applicationBypassUpdateBodyProperties, {
    additionalProperties: s.json(),
  });

export const applicationBypassUpdateBodySchema: Schema<ApplicationBypassUpdateBody> = s.lazySchema(() =>
  s.object<ApplicationBypassUpdateBody>(
    {
      ...applicationBypassUpdateBodyProperties,
      custom: s.optional(s.lazy(() => customSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
