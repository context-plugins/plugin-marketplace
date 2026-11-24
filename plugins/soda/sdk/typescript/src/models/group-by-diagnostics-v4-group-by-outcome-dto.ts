import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupByDiagnosticsV4GroupByOutcomeDto = {
  Pass: "pass",
  Warn: "warn",
  Fail: "fail",
} as const;
export type GroupByDiagnosticsV4GroupByOutcomeDto =
  | (typeof GroupByDiagnosticsV4GroupByOutcomeDto)[keyof typeof GroupByDiagnosticsV4GroupByOutcomeDto]
  | (string & {});

export const groupByDiagnosticsV4GroupByOutcomeDtoSchema: EnumSchema<GroupByDiagnosticsV4GroupByOutcomeDto> =
  s.enumOf<GroupByDiagnosticsV4GroupByOutcomeDto>(GroupByDiagnosticsV4GroupByOutcomeDto);
