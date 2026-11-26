import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit the filing's own table headers name (`(In millions, except per share data)`). The prose
 * and list fields (`analysis`, `balance_sheet_cash_flow`, `capital_returns`, `concerns`, …) quote
 * table figures as printed, so in a read with `table_scale: millions` a bare `$36,197` there is
 * $36,197 million; per-share figures are always as printed. Null when the headers name no unit or
 * name two without a clear majority. Added 2026-10-01 to every stored read.
 */
export const TableScale = {
  Thousands: "thousands",
  Millions: "millions",
  Billions: "billions",
} as const;
export type TableScale = (typeof TableScale)[keyof typeof TableScale] | (string & {});

export const tableScaleSchema: EnumSchema<TableScale> = s.enumOf<TableScale>(TableScale);
