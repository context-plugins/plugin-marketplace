import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FreshnessDiffDiagnosticsV4UnitOfTimeDto = {
  Minutes: "minutes",
  Hours: "hours",
  Days: "days",
} as const;
export type FreshnessDiffDiagnosticsV4UnitOfTimeDto =
  | (typeof FreshnessDiffDiagnosticsV4UnitOfTimeDto)[keyof typeof FreshnessDiffDiagnosticsV4UnitOfTimeDto]
  | (string & {});

export const freshnessDiffDiagnosticsV4UnitOfTimeDtoSchema: EnumSchema<FreshnessDiffDiagnosticsV4UnitOfTimeDto> =
  s.enumOf<FreshnessDiffDiagnosticsV4UnitOfTimeDto>(FreshnessDiffDiagnosticsV4UnitOfTimeDto);
