import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryPropertiesSchema, type CategoryProperties } from "./category-properties.js";

export type UpdateCallAnalyticsCategoryResponse = {
  categoryProperties?: CategoryProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCallAnalyticsCategoryResponseSchema: Schema<UpdateCallAnalyticsCategoryResponse> =
  s.object<UpdateCallAnalyticsCategoryResponse>(
    {
      categoryProperties: s.optional(s.lazy(() => categoryPropertiesSchema)),
      _keysMap: {
        categoryProperties: "CategoryProperties",
      },
    },
    { additionalProperties: s.json() },
  );
