import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  geometryReportingReportsApiSchema,
  type GeometryReportingReportsApi,
} from "./geometry-reporting-reports-api.js";

export type LocationReportingReportsApi = {
  /** Country */
  country?: string;
  /** Address */
  formattedAddress?: string;
  geometry?: GeometryReportingReportsApi;
  /** Postal Code */
  postalCode?: string;
  /** Route Name */
  route?: string;
  /** Route Number */
  routeNo?: string;
  /** State */
  state?: string;
  /** Suburb */
  suburb?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationReportingReportsApiSchema: Schema<LocationReportingReportsApi> =
  s.object<LocationReportingReportsApi>(
    {
      country: s.optional(s.string()),
      formattedAddress: s.optional(s.string()),
      geometry: s.optional(s.lazy(() => geometryReportingReportsApiSchema)),
      postalCode: s.optional(s.string()),
      route: s.optional(s.string()),
      routeNo: s.optional(s.string()),
      state: s.optional(s.string()),
      suburb: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
