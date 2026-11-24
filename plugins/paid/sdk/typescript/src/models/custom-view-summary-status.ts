import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomViewSummaryStatus = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type CustomViewSummaryStatus =
  | (typeof CustomViewSummaryStatus)[keyof typeof CustomViewSummaryStatus]
  | (string & {});

export const customViewSummaryStatusSchema: EnumSchema<CustomViewSummaryStatus> =
  s.enumOf<CustomViewSummaryStatus>(CustomViewSummaryStatus);
