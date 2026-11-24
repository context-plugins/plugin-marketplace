import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`,
 * `Q3`, or `Q4`.
 */
export const Period = {
  Fy: "FY",
  H1: "H1",
  H2: "H2",
  Q1: "Q1",
  Q2: "Q2",
  Q3: "Q3",
  Q4: "Q4",
} as const;
export type Period = (typeof Period)[keyof typeof Period] | (string & {});

export const periodSchema: EnumSchema<Period> = s.enumOf<Period>(Period);
