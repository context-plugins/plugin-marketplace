import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfitAndLossMetaData = {
  /** pageNumber for pagination */
  pageNumber?: number;
  /** Page size */
  pageSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossMetaDataSchema: Schema<ProfitAndLossMetaData> = s.object<ProfitAndLossMetaData>(
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
