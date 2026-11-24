import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentTypeAmazonLexModelBuildingV2OperationsApiSchema,
  type ContentTypeAmazonLexModelBuildingV2OperationsApi,
} from "./content-type-amazon-lex-model-building-v2-operations-api.js";
import { genericAttachmentSchema, type GenericAttachment } from "./generic-attachment.js";

export type ResponseCard = {
  /** The version of the response card format. */
  version?: string;
  /** The content type of the response. */
  contentType?: ContentTypeAmazonLexModelBuildingV2OperationsApi;
  /** An array of attachment objects representing options. */
  genericAttachments?: GenericAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseCardSchema: Schema<ResponseCard> = s.object<ResponseCard>(
  {
    version: s.optional(s.string()),
    contentType: s.optional(s.lazy(() => contentTypeAmazonLexModelBuildingV2OperationsApiSchema)),
    genericAttachments: s.optional(s.array(s.lazy(() => genericAttachmentSchema))),
  },
  { additionalProperties: s.json() },
);
