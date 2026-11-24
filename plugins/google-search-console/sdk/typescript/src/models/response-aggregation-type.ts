import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the results were aggregated. */
export const ResponseAggregationType = {
  Auto: "AUTO",
  ByProperty: "BY_PROPERTY",
  ByPage: "BY_PAGE",
  ByNewsShowcasePanel: "BY_NEWS_SHOWCASE_PANEL",
} as const;
export type ResponseAggregationType =
  | (typeof ResponseAggregationType)[keyof typeof ResponseAggregationType]
  | (string & {});

export const responseAggregationTypeSchema: EnumSchema<ResponseAggregationType> =
  s.enumOf<ResponseAggregationType>(ResponseAggregationType);
