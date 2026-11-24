import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logFormatSchema, type LogFormat } from "./log-format.js";

/**
 * Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If
 * unspecified defaults to JSON.
 */
export type TelemetryConfig2 = {
  /** Optional. The output format of the Dataproc Metastore service's logs. */
  logFormat?: LogFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const telemetryConfig2Schema: Schema<TelemetryConfig2> = s.object<TelemetryConfig2>(
  {
    logFormat: s.optional(s.lazy(() => logFormatSchema)),
  },
  { additionalProperties: s.json() },
);
