import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH. */
export const MethodPerigonMonitorsApi = {
  WebSearch: "WEB_SEARCH",
  ArticleSearch: "ARTICLE_SEARCH",
  XPost: "X_POST",
} as const;
export type MethodPerigonMonitorsApi =
  | (typeof MethodPerigonMonitorsApi)[keyof typeof MethodPerigonMonitorsApi]
  | (string & {});

export const methodPerigonMonitorsApiSchema: EnumSchema<MethodPerigonMonitorsApi> =
  s.enumOf<MethodPerigonMonitorsApi>(MethodPerigonMonitorsApi);
