import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Story details keyed by story identifier for stories cited in the newsletter. */
export type SignalNewsletterStoryPartialDto = {
  /** URL-safe identifier for the story. */
  slug?: string | null;
  /** URL of the story. */
  url?: string | null;
  /** Story headline. */
  title?: string | null;
  /** URL of the source favicon used for the story. */
  sourceFavicon?: string | null;
  /** Date and time the story was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Date and time the story was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalNewsletterStoryPartialDtoSchema: Schema<SignalNewsletterStoryPartialDto> =
  s.object<SignalNewsletterStoryPartialDto>(
    {
      slug: s.optionalNullable(s.string()),
      url: s.optionalNullable(s.string()),
      title: s.optionalNullable(s.string()),
      sourceFavicon: s.optionalNullable(s.string()),
      updatedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
