import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attributeAmazonLexModelBuildingV2TestsetsApiSchema,
  type AttributeAmazonLexModelBuildingV2TestsetsApi,
} from "./attribute-amazon-lex-model-building-v2-testsets-api.js";
import {
  orderAmazonLexModelBuildingV2TestexecutionsApiSchema,
  type OrderAmazonLexModelBuildingV2TestexecutionsApi,
} from "./order-amazon-lex-model-building-v2-testexecutions-api.js";

export type TestSetSortBy = {
  /** Specifies whether to sort the test sets by name or by the time they were last updated. */
  attribute: AttributeAmazonLexModelBuildingV2TestsetsApi;
  /** Specifies whether to sort in ascending or descending order. */
  order: OrderAmazonLexModelBuildingV2TestexecutionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetSortBySchema: Schema<TestSetSortBy> = s.object<TestSetSortBy>(
  {
    attribute: attributeAmazonLexModelBuildingV2TestsetsApiSchema,
    order: orderAmazonLexModelBuildingV2TestexecutionsApiSchema,
  },
  { additionalProperties: s.json() },
);
