import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Meta data for trade wise data details */
export type ProfitAndLossMetaData2 = {
  /** pageNumber for pagination */
  pageNumber?: number;
  /** Page size */
  pageSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossMetaData2Schema: Schema<ProfitAndLossMetaData2> = s.object<ProfitAndLossMetaData2>(
  {
    pageNumber: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    _keysMap: {
      pageNumber: "page_number",
      pageSize: "page_size",
    },
  },
  { additionalProperties: s.json() },
);
