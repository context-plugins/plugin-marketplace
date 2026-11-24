import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryPropertiesSchema, type CategoryProperties } from "./category-properties.js";

export type ListCallAnalyticsCategoriesResponse = {
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /**
   * Provides detailed information about your Call Analytics categories, including all the rules
   * associated with each category.
   */
  categories?: CategoryProperties[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCallAnalyticsCategoriesResponseSchema: Schema<ListCallAnalyticsCategoriesResponse> =
  s.object<ListCallAnalyticsCategoriesResponse>(
    {
      nextToken: s.optional(s.string()),
      categories: s.optional(s.array(s.lazy(() => categoryPropertiesSchema))),
      _keysMap: {
        nextToken: "NextToken",
        categories: "Categories",
      },
    },
    { additionalProperties: s.json() },
  );
