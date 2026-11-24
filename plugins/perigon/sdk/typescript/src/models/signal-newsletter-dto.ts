import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalArticlePartialDtoSchema, type SignalArticlePartialDto } from "./signal-article-partial-dto.js";
import {
  signalNewsletterStoryPartialDtoSchema,
  type SignalNewsletterStoryPartialDto,
} from "./signal-newsletter-story-partial-dto.js";
import { xPostSchema, type XPost } from "./xpost.js";

/** Newsletters returned for the requested page. */
export type SignalNewsletterDto = {
  /** Unique identifier for the newsletter. */
  uuid?: string | null;
  /** Date and time the newsletter was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the newsletter was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Generated title of the newsletter. */
  title?: string | null;
  /** Generated newsletter content. */
  content?: string | null;
  /** Article details keyed by article ID for content cited in the newsletter. */
  articles?: Record<string, SignalArticlePartialDto> | null;
  /** Story details keyed by story identifier for stories cited in the newsletter. */
  stories?: Record<string, SignalNewsletterStoryPartialDto> | null;
  xPosts?: Record<string, XPost> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalNewsletterDtoSchema: Schema<SignalNewsletterDto> = s.object<SignalNewsletterDto>(
  {
    uuid: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    title: s.optionalNullable(s.string()),
    content: s.optionalNullable(s.string()),
    articles: s.optionalNullable(
      s.record(
        s.string(),
        s.lazy(() => signalArticlePartialDtoSchema),
      ),
    ),
    stories: s.optionalNullable(
      s.record(
        s.string(),
        s.lazy(() => signalNewsletterStoryPartialDtoSchema),
      ),
    ),
    xPosts: s.optionalNullable(
      s.record(
        s.string(),
        s.lazy(() => xPostSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
