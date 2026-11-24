import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteCallAnalyticsCategoryRequest = {
  /**
   * The name of the Call Analytics category you want to delete. Category names are case sensitive.
   */
  categoryName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteCallAnalyticsCategoryRequestSchema: Schema<DeleteCallAnalyticsCategoryRequest> =
  s.object<DeleteCallAnalyticsCategoryRequest>(
    {
      categoryName: s.string(),
      _keysMap: {
        categoryName: "CategoryName",
      },
    },
    { additionalProperties: s.json() },
  );
