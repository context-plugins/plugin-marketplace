import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * See [View data as (Comparative
 * report)](https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as).
 */
export const DisplayValues = {
  ActualsOnly: "actuals_only",
  AbsoluteChange: "absolute_change",
  PercentageChange: "percentage_change",
  AbsoluteAndPercentage: "absolute_and_percentage",
} as const;
export type DisplayValues = (typeof DisplayValues)[keyof typeof DisplayValues] | (string & {});

export const displayValuesSchema: EnumSchema<DisplayValues> = s.enumOf<DisplayValues>(DisplayValues);
