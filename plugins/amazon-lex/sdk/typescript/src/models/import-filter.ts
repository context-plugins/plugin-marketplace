import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  operatorAmazonLexModelBuildingV2ImportsApiSchema,
  type OperatorAmazonLexModelBuildingV2ImportsApi,
} from "./operator-amazon-lex-model-building-v2-imports-api.js";

export type ImportFilter = {
  /** The name of the field to use for filtering. @default "ImportResourceType" */
  name?: "ImportResourceType";
  /**
   * The values to use to filter the response. The values must be Bot, BotLocale, or
   * CustomVocabulary.
   */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListImports operation should return
   * only resource types that equal the specified value. Specify CO when the ListImports operation
   * should return resource types that contain the specified value.
   */
  operator: OperatorAmazonLexModelBuildingV2ImportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importFilterSchema: Schema<ImportFilter> = s.object<ImportFilter>(
  {
    name: s.defaulted(s.literal("ImportResourceType"), "ImportResourceType"),
    values: s.array(s.string()),
    operator: operatorAmazonLexModelBuildingV2ImportsApiSchema,
  },
  { additionalProperties: s.json() },
);
