import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  order1AmazonLexModelBuildingV2BuiltinsApiSchema,
  type Order1AmazonLexModelBuildingV2BuiltinsApi,
} from "./order1-amazon-lex-model-building-v2-builtins-api.js";

export type BuiltInSlotTypeSortBy = {
  /** The attribute to use to sort the list of built-in intents. @default "SlotTypeSignature" */
  attribute?: "SlotTypeSignature";
  /** The order to sort the list. You can choose ascending or descending. */
  order: Order1AmazonLexModelBuildingV2BuiltinsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtInSlotTypeSortBySchema: Schema<BuiltInSlotTypeSortBy> = s.object<BuiltInSlotTypeSortBy>(
  {
    attribute: s.defaulted(s.literal("SlotTypeSignature"), "SlotTypeSignature"),
    order: order1AmazonLexModelBuildingV2BuiltinsApiSchema,
  },
  { additionalProperties: s.json() },
);
