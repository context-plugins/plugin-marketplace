import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of data truncation. */
export const DataTruncationType = {
  DataTruncationTypeUnspecified: "DATA_TRUNCATION_TYPE_UNSPECIFIED",
  DataTruncationTypeRulesBasedModels: "DATA_TRUNCATION_TYPE_RULES_BASED_MODELS",
  DataTruncationTypeDataDrivenAttribution: "DATA_TRUNCATION_TYPE_DATA_DRIVEN_ATTRIBUTION",
  DataTruncationTypeDv360: "DATA_TRUNCATION_TYPE_DV360",
  DataTruncationTypeCm360: "DATA_TRUNCATION_TYPE_CM360",
  DataTruncationTypeItemScopedEcommerceMetrics: "DATA_TRUNCATION_TYPE_ITEM_SCOPED_ECOMMERCE_METRICS",
  DataTruncationTypeEventScopedEcommerceMetrics: "DATA_TRUNCATION_TYPE_EVENT_SCOPED_ECOMMERCE_METRICS",
  DataTruncationTypeDateRange: "DATA_TRUNCATION_TYPE_DATE_RANGE",
  DataTruncationTypeProperty: "DATA_TRUNCATION_TYPE_PROPERTY",
  DataTruncationTypeConversions: "DATA_TRUNCATION_TYPE_CONVERSIONS",
  DataTruncationTypeGoogleAds: "DATA_TRUNCATION_TYPE_GOOGLE_ADS",
} as const;
export type DataTruncationType = (typeof DataTruncationType)[keyof typeof DataTruncationType] | (string & {});

export const dataTruncationTypeSchema: EnumSchema<DataTruncationType> =
  s.enumOf<DataTruncationType>(DataTruncationType);
