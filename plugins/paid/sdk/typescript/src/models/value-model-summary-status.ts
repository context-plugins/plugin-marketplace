import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueModelSummaryStatus = {
  Draft: "draft",
  Active: "active",
  Archived: "archived",
} as const;
export type ValueModelSummaryStatus =
  | (typeof ValueModelSummaryStatus)[keyof typeof ValueModelSummaryStatus]
  | (string & {});

export const valueModelSummaryStatusSchema: EnumSchema<ValueModelSummaryStatus> =
  s.enumOf<ValueModelSummaryStatus>(ValueModelSummaryStatus);
