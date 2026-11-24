import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The content type of the response. */
export const ContentTypeAmazonLexModelBuildingV2OperationsApi = {
  ApplicationVndAmazonawsCardGeneric: "application/vnd.amazonaws.card.generic",
} as const;
export type ContentTypeAmazonLexModelBuildingV2OperationsApi =
  | (typeof ContentTypeAmazonLexModelBuildingV2OperationsApi)[keyof typeof ContentTypeAmazonLexModelBuildingV2OperationsApi]
  | (string & {});

export const contentTypeAmazonLexModelBuildingV2OperationsApiSchema: EnumSchema<ContentTypeAmazonLexModelBuildingV2OperationsApi> =
  s.enumOf<ContentTypeAmazonLexModelBuildingV2OperationsApi>(
    ContentTypeAmazonLexModelBuildingV2OperationsApi,
  );
