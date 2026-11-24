import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregationTypeSchema, type AggregationType } from "./aggregation-type.js";
import { apiDimensionFilterGroupSchema, type ApiDimensionFilterGroup } from "./api-dimension-filter-group.js";
import { dataStateSchema, type DataState } from "./data-state.js";
import { dimension1Schema, type Dimension1 } from "./dimension1.js";
import { searchTypeSchema, type SearchType } from "./search-type.js";
import { typeSchema, type Type } from "./type.js";

export type SearchAnalyticsQueryRequest = {
  /**
   * [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in
   * the Search Analytics page. Dimensions are combined to create a unique row key for each row.
   * Results are grouped in the order that you supply these dimensions.
   */
  dimensions?: Dimension1[];
  /**
   * [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00).
   * Must be greater than or equal to the start date. This value is included in the range.
   */
  endDate?: string;
  /**
   * Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or
   * Gnews.
   */
  type?: Type;
  /**
   * [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for
   * the same property is aggregated; if aggregated by page, all data is aggregated by canonical
   * URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by
   * property or by page, depending on how you want your data calculated; see the help documentation
   * to learn how data is calculated differently by site versus by page. **Note:** If you group or
   * filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the
   * aggregation type in the result will match the requested type, or if you request an invalid
   * type, you will get an error. The API will never change your aggregation type if the requested
   * type is invalid.
   */
  aggregationType?: AggregationType;
  /**
   * The data state to be fetched, can be full or all, the latter including full and partial data.
   */
  dataState?: DataState;
  /**
   * [Optional; Default is 0] Zero-based index of the first row in the response. Must be a
   * non-negative number.
   */
  startRow?: number;
  /** [Optional; Default is \"web\"] The search type to filter for. */
  searchType?: SearchType;
  /**
   * [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query
   * contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not
   * case-sensitive). You can filter by a dimension without grouping by it.
   */
  dimensionFilterGroups?: ApiDimensionFilterGroup[];
  /**
   * [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to
   * 25,000 (inclusive).
   */
  rowLimit?: number;
  /**
   * [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC -
   * 8:00). Must be less than or equal to the end date. This value is included in the range.
   */
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchAnalyticsQueryRequestSchema: Schema<SearchAnalyticsQueryRequest> =
  s.object<SearchAnalyticsQueryRequest>(
    {
      dimensions: s.optional(s.array(s.lazy(() => dimension1Schema))),
      endDate: s.optional(s.string()),
      type: s.optional(s.lazy(() => typeSchema)),
      aggregationType: s.optional(s.lazy(() => aggregationTypeSchema)),
      dataState: s.optional(s.lazy(() => dataStateSchema)),
      startRow: s.optional(s.int()),
      searchType: s.optional(s.lazy(() => searchTypeSchema)),
      dimensionFilterGroups: s.optional(s.array(s.lazy(() => apiDimensionFilterGroupSchema))),
      rowLimit: s.optional(s.int()),
      startDate: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
