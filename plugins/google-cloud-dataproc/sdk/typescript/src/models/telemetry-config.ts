import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logFormatSchema, type LogFormat } from "./log-format.js";

/** Telemetry Configuration for the Dataproc Metastore service. */
export type TelemetryConfig = {
  /** Optional. The output format of the Dataproc Metastore service's logs. */
  logFormat?: LogFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const telemetryConfigSchema: Schema<TelemetryConfig> = s.object<TelemetryConfig>(
  {
    logFormat: s.optional(s.lazy(() => logFormatSchema)),
  },
  { additionalProperties: s.json() },
);
