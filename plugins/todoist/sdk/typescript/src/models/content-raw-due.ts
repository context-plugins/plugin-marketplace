import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateTypeSchema, type DateType } from "./date-type.js";

/** An unresolved due, optionally carrying typed metadata from raw preview. */
export type ContentRawDue = {
  /**
   * Natural-language or ISO date. Nonrecurring task due dates are stored relative to the save day;
   * deadlines retain their supplied strings.
   */
  string: string;
  /** Language of the date expression. */
  lang?: string | null;
  /** Explicit due type from an unresolved typed preview (v1.6+). */
  dateType?: DateType | null;
  /** Independent local clock time. Required for timed date_type values. */
  time?: string | null;
  /** Timezone name, required only for fixed_datetime. Existing supported aliases are accepted. */
  timezone?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentRawDueProperties: s.Shape<ContentRawDue> = {
  string: s.string(),
  lang: s.optionalNullable(s.string()),
  dateType: s.optionalNullable(s.lazy(() => dateTypeSchema)),
  time: s.optionalNullable(s.string()),
  timezone: s.optionalNullable(s.string()),
  _keysMap: {
    dateType: "date_type",
  },
};

export const contentRawDueInternalSchema: Schema<ContentRawDue> = s.object<ContentRawDue>(
  contentRawDueProperties,
  { additionalProperties: s.json() },
);

export const contentRawDueSchema: Schema<ContentRawDue> = s.lazySchema(() =>
  s.object<ContentRawDue>(
    {
      ...contentRawDueProperties,
      string: s.string().check(s.minLength(1), s.maxLength(255)),
      lang: s.optionalNullable(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
