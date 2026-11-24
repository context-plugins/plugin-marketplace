import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profitAndLossMetaData2Schema, type ProfitAndLossMetaData2 } from "./profit-and-loss-meta-data2.js";

export type ProfitAndLossMetaDataWrapper = {
  /** Meta data for trade wise data details */
  page?: ProfitAndLossMetaData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossMetaDataWrapperSchema: Schema<ProfitAndLossMetaDataWrapper> =
  s.object<ProfitAndLossMetaDataWrapper>(
    {
      page: s.optional(s.lazy(() => profitAndLossMetaData2Schema)),
    },
    { additionalProperties: s.json() },
  );
