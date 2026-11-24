import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentTypeAmazonLexModelBuildingV2VersionsApiSchema,
  type ContentTypeAmazonLexModelBuildingV2VersionsApi,
} from "./content-type-amazon-lex-model-building-v2-versions-api.js";

export type ModelsLexMessageAmazonLexModelBuildingV2VersionsApi = {
  /** The content type of the message string. */
  contentType: ContentTypeAmazonLexModelBuildingV2VersionsApi;
  /** The text of the message. */
  content: string;
  /**
   * Identifies the message group that the message belongs to. When a group is assigned to a
   * message, Amazon Lex returns one message from each group in the response.
   */
  groupNumber?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexMessageAmazonLexModelBuildingV2VersionsApiSchema: Schema<ModelsLexMessageAmazonLexModelBuildingV2VersionsApi> =
  s.object<ModelsLexMessageAmazonLexModelBuildingV2VersionsApi>(
    {
      contentType: contentTypeAmazonLexModelBuildingV2VersionsApiSchema,
      content: s.string(),
      groupNumber: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
