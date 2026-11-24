import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderAmazonLexModelBuildingV2ExportsApiSchema,
  type OrderAmazonLexModelBuildingV2ExportsApi,
} from "./order-amazon-lex-model-building-v2-exports-api.js";

export type ExportSortBy = {
  /** The export field to use for sorting. @default "LastUpdatedDateTime" */
  attribute?: "LastUpdatedDateTime";
  /** The order to sort the list. */
  order: OrderAmazonLexModelBuildingV2ExportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportSortBySchema: Schema<ExportSortBy> = s.object<ExportSortBy>(
  {
    attribute: s.defaulted(s.literal("LastUpdatedDateTime"), "LastUpdatedDateTime"),
    order: orderAmazonLexModelBuildingV2ExportsApiSchema,
  },
  { additionalProperties: s.json() },
);
