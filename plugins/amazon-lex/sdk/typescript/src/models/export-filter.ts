import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  operatorAmazonLexModelBuildingV2ExportsApiSchema,
  type OperatorAmazonLexModelBuildingV2ExportsApi,
} from "./operator-amazon-lex-model-building-v2-exports-api.js";

export type ExportFilter = {
  /** The name of the field to use for filtering. @default "ExportResourceType" */
  name?: "ExportResourceType";
  /**
   * The values to use to filter the response. The values must be Bot, BotLocale, or
   * CustomVocabulary.
   */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListExports operation should return
   * only resource types that equal the specified value. Specify CO when the ListExports operation
   * should return resource types that contain the specified value.
   */
  operator: OperatorAmazonLexModelBuildingV2ExportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportFilterSchema: Schema<ExportFilter> = s.object<ExportFilter>(
  {
    name: s.defaulted(s.literal("ExportResourceType"), "ExportResourceType"),
    values: s.array(s.string()),
    operator: operatorAmazonLexModelBuildingV2ExportsApiSchema,
  },
  { additionalProperties: s.json() },
);
