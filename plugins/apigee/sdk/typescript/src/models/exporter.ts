import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. Exporter that is used to view the distributed trace captured using the chosen trace
 * protocol. An exporter sends traces to any backend that is capable of consuming them. Recorded
 * spans can be exported by registered exporters.
 */
export const Exporter = {
  ExporterUnspecified: "EXPORTER_UNSPECIFIED",
  Jaeger: "JAEGER",
  CloudTrace: "CLOUD_TRACE",
  OpenTelemetryCollector: "OPEN_TELEMETRY_COLLECTOR",
  OpenTelemetryCloudTrace: "OPEN_TELEMETRY_CLOUD_TRACE",
} as const;
export type Exporter = (typeof Exporter)[keyof typeof Exporter] | (string & {});

export const exporterSchema: EnumSchema<Exporter> = s.enumOf<Exporter>(Exporter);
