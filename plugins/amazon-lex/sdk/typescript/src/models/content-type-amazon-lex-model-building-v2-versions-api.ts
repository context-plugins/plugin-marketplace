import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The content type of the message string. */
export const ContentTypeAmazonLexModelBuildingV2VersionsApi = {
  PlainText: "PlainText",
  Ssml: "SSML",
  CustomPayload: "CustomPayload",
} as const;
export type ContentTypeAmazonLexModelBuildingV2VersionsApi =
  | (typeof ContentTypeAmazonLexModelBuildingV2VersionsApi)[keyof typeof ContentTypeAmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const contentTypeAmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<ContentTypeAmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<ContentTypeAmazonLexModelBuildingV2VersionsApi>(ContentTypeAmazonLexModelBuildingV2VersionsApi);
