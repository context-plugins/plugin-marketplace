import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An unresolved deadline expression without an authoritative date. */
export type ContentRawDeadline = {
  /**
   * Natural-language or ISO date. Nonrecurring task due dates are stored relative to the save day;
   * deadlines retain their supplied strings.
   */
  string: string;
  /** Language of the date expression. */
  lang?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentRawDeadlineProperties: s.Shape<ContentRawDeadline> = {
  string: s.string(),
  lang: s.optionalNullable(s.string()),
};

export const contentRawDeadlineInternalSchema: Schema<ContentRawDeadline> = s.object<ContentRawDeadline>(
  contentRawDeadlineProperties,
  { additionalProperties: s.json() },
);

export const contentRawDeadlineSchema: Schema<ContentRawDeadline> = s.lazySchema(() =>
  s.object<ContentRawDeadline>(
    {
      ...contentRawDeadlineProperties,
      string: s.string().check(s.minLength(1), s.maxLength(255)),
      lang: s.optionalNullable(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
