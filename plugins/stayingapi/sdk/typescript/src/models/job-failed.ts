import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2InternalSchema, data2Schema, type Data2 } from "./data2.js";
import { meta2Schema, type Meta2 } from "./meta2.js";

/**
 * failed — HTTP 200 with the failure nested at data.error (a PlatformFailureError, incl.
 * `retryable`). creditsCharged is 0 (failed work is free). Detect via data.status === "failed", NOT
 * via a top-level `error`.
 */
export type JobFailed = {
  data: Data2;
  meta: Meta2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobFailedProperties: s.Shape<JobFailed> = {
  data: data2InternalSchema,
  meta: meta2Schema,
};

export const jobFailedInternalSchema: Schema<JobFailed> = s.object<JobFailed>(jobFailedProperties, {
  additionalProperties: s.json(),
});

export const jobFailedSchema: Schema<JobFailed> = s.lazySchema(() =>
  s.object<JobFailed>(
    {
      ...jobFailedProperties,
      data: data2Schema,
    },
    { additionalProperties: s.json() },
  ),
);
