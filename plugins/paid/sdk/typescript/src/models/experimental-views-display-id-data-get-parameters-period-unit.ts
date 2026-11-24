import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExperimentalViewsDisplayIdDataGetParametersPeriodUnit = {
  Day: "day",
  Month: "month",
  Year: "year",
} as const;
export type ExperimentalViewsDisplayIdDataGetParametersPeriodUnit =
  | (typeof ExperimentalViewsDisplayIdDataGetParametersPeriodUnit)[keyof typeof ExperimentalViewsDisplayIdDataGetParametersPeriodUnit]
  | (string & {});

export const experimentalViewsDisplayIdDataGetParametersPeriodUnitSchema: EnumSchema<ExperimentalViewsDisplayIdDataGetParametersPeriodUnit> =
  s.enumOf<ExperimentalViewsDisplayIdDataGetParametersPeriodUnit>(
    ExperimentalViewsDisplayIdDataGetParametersPeriodUnit,
  );
