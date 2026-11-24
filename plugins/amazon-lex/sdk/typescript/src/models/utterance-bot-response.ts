import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentType1Schema, type ContentType1 } from "./content-type1.js";
import { imageResponseCardSchema, type ImageResponseCard } from "./image-response-card.js";

export type UtteranceBotResponse = {
  /** The text of the response to the utterance from the bot. */
  content?: string;
  /**
   * The type of the response. The following values are possible: PlainText – A plain text string.
   * CustomPayload – A response string that you can customize to include data or metadata for your
   * application. SSML – A string that includes Speech Synthesis Markup Language to customize the
   * audio response. ImageResponseCard – An image with buttons that the customer can select. See
   * ImageResponseCard for more information.
   */
  contentType?: ContentType1;
  imageResponseCard?: ImageResponseCard;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceBotResponseSchema: Schema<UtteranceBotResponse> = s.object<UtteranceBotResponse>(
  {
    content: s.optional(s.string()),
    contentType: s.optional(s.lazy(() => contentType1Schema)),
    imageResponseCard: s.optional(s.lazy(() => imageResponseCardSchema)),
  },
  { additionalProperties: s.json() },
);
