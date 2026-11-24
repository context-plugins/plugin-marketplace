import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeometryReportingReportsApi = {
  /** Latitude */
  lat?: string;
  /** Longitude */
  lng?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geometryReportingReportsApiSchema: Schema<GeometryReportingReportsApi> =
  s.object<GeometryReportingReportsApi>(
    {
      lat: s.optional(s.string()),
      lng: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
