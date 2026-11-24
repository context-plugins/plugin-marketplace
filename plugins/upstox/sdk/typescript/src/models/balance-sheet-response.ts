import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balanceSheetDataSchema, type BalanceSheetData } from "./balance-sheet-data.js";
import { statusSchema, type Status } from "./status.js";

export type BalanceSheetResponse = {
  status?: Status;
  data?: BalanceSheetData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceSheetResponseSchema: Schema<BalanceSheetResponse> = s.object<BalanceSheetResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => balanceSheetDataSchema)),
  },
  { additionalProperties: s.json() },
);
