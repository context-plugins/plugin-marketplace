import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderAmazonLexModelBuildingV2BuiltinsApiSchema,
  type OrderAmazonLexModelBuildingV2BuiltinsApi,
} from "./order-amazon-lex-model-building-v2-builtins-api.js";

export type BuiltInIntentSortBy = {
  /** The attribute to use to sort the list of built-in intents. @default "IntentSignature" */
  attribute?: "IntentSignature";
  /** The order to sort the list. You can specify ascending or descending order. */
  order: OrderAmazonLexModelBuildingV2BuiltinsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtInIntentSortBySchema: Schema<BuiltInIntentSortBy> = s.object<BuiltInIntentSortBy>(
  {
    attribute: s.defaulted(s.literal("IntentSignature"), "IntentSignature"),
    order: orderAmazonLexModelBuildingV2BuiltinsApiSchema,
  },
  { additionalProperties: s.json() },
);
