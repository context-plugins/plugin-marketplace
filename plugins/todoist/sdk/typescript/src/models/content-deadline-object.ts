import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An absolute deadline calendar date, without recurrence or time. */
export type ContentDeadlineObject = {
  /** Absolute deadline in YYYY-MM-DD format. */
  date: string;
  /** Supported date language metadata. */
  lang?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentDeadlineObjectProperties: s.Shape<ContentDeadlineObject> = {
  date: s.dateOnly(),
  lang: s.optionalNullable(s.string()),
};

export const contentDeadlineObjectInternalSchema: Schema<ContentDeadlineObject> =
  s.object<ContentDeadlineObject>(contentDeadlineObjectProperties, { additionalProperties: s.json() });

export const contentDeadlineObjectSchema: Schema<ContentDeadlineObject> = s.lazySchema(() =>
  s.object<ContentDeadlineObject>(
    {
      ...contentDeadlineObjectProperties,
      lang: s.optionalNullable(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
