import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  categoryReportingReportsApiSchema,
  type CategoryReportingReportsApi,
} from "./category-reporting-reports-api.js";
import {
  locationReportingReportsApiSchema,
  type LocationReportingReportsApi,
} from "./location-reporting-reports-api.js";
import {
  merchantReportingReportsApiSchema,
  type MerchantReportingReportsApi,
} from "./merchant-reporting-reports-api.js";

export type Enrich = {
  cleanDescription: string;
  tags: Record<string, unknown>;
  category: CategoryReportingReportsApi;
  location: LocationReportingReportsApi;
  merchant: MerchantReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichSchema: Schema<Enrich> = s.object<Enrich>(
  {
    cleanDescription: s.string(),
    tags: s.record(s.string(), s.unknown()),
    category: categoryReportingReportsApiSchema,
    location: locationReportingReportsApiSchema,
    merchant: merchantReportingReportsApiSchema,
  },
  { additionalProperties: s.json() },
);
