import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends
 * traces to any backend that is capable of consuming them. Recorded spans can be exported by
 * registered exporters.
 */
export const Exporter1 = {
  ExporterUnspecified: "EXPORTER_UNSPECIFIED",
  Jaeger: "JAEGER",
  CloudTrace: "CLOUD_TRACE",
  OpenTelemetryCollector: "OPEN_TELEMETRY_COLLECTOR",
  OpenTelemetryCloudTrace: "OPEN_TELEMETRY_CLOUD_TRACE",
} as const;
export type Exporter1 = (typeof Exporter1)[keyof typeof Exporter1] | (string & {});

export const exporter1Schema: EnumSchema<Exporter1> = s.enumOf<Exporter1>(Exporter1);
