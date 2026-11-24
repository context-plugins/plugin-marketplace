import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExperimentalViewsDisplayIdDataGetParametersPeriodKind = {
  Relative: "relative",
  Absolute: "absolute",
} as const;
export type ExperimentalViewsDisplayIdDataGetParametersPeriodKind =
  | (typeof ExperimentalViewsDisplayIdDataGetParametersPeriodKind)[keyof typeof ExperimentalViewsDisplayIdDataGetParametersPeriodKind]
  | (string & {});

export const experimentalViewsDisplayIdDataGetParametersPeriodKindSchema: EnumSchema<ExperimentalViewsDisplayIdDataGetParametersPeriodKind> =
  s.enumOf<ExperimentalViewsDisplayIdDataGetParametersPeriodKind>(
    ExperimentalViewsDisplayIdDataGetParametersPeriodKind,
  );
