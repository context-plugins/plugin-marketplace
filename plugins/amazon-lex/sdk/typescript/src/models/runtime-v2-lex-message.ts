import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";
import { imageResponseCardSchema, type ImageResponseCard } from "./image-response-card.js";

export type RuntimeV2LexMessage = {
  /** The text of the message. */
  content?: string;
  /** Indicates the type of response. */
  contentType: ContentType;
  imageResponseCard?: ImageResponseCard;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexMessageSchema: Schema<RuntimeV2LexMessage> = s.object<RuntimeV2LexMessage>(
  {
    content: s.optional(s.string()),
    contentType: contentTypeSchema,
    imageResponseCard: s.optional(s.lazy(() => imageResponseCardSchema)),
  },
  { additionalProperties: s.json() },
);
