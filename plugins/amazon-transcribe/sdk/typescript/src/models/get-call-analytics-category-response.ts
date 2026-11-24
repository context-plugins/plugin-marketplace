import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryPropertiesSchema, type CategoryProperties } from "./category-properties.js";

export type GetCallAnalyticsCategoryResponse = {
  categoryProperties?: CategoryProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCallAnalyticsCategoryResponseSchema: Schema<GetCallAnalyticsCategoryResponse> =
  s.object<GetCallAnalyticsCategoryResponse>(
    {
      categoryProperties: s.optional(s.lazy(() => categoryPropertiesSchema)),
      _keysMap: {
        categoryProperties: "CategoryProperties",
      },
    },
    { additionalProperties: s.json() },
  );
