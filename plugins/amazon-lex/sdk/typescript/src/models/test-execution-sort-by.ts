import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attributeAmazonLexModelBuildingV2TestexecutionsApiSchema,
  type AttributeAmazonLexModelBuildingV2TestexecutionsApi,
} from "./attribute-amazon-lex-model-building-v2-testexecutions-api.js";
import {
  orderAmazonLexModelBuildingV2TestexecutionsApiSchema,
  type OrderAmazonLexModelBuildingV2TestexecutionsApi,
} from "./order-amazon-lex-model-building-v2-testexecutions-api.js";

export type TestExecutionSortBy = {
  /**
   * Specifies whether to sort the test set executions by the date and time at which the test sets
   * were created.
   */
  attribute: AttributeAmazonLexModelBuildingV2TestexecutionsApi;
  /** Specifies whether to sort in ascending or descending order. */
  order: OrderAmazonLexModelBuildingV2TestexecutionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testExecutionSortBySchema: Schema<TestExecutionSortBy> = s.object<TestExecutionSortBy>(
  {
    attribute: attributeAmazonLexModelBuildingV2TestexecutionsApiSchema,
    order: orderAmazonLexModelBuildingV2TestexecutionsApiSchema,
  },
  { additionalProperties: s.json() },
);
