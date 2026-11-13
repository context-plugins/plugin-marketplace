import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A complete due with explicit timezone and recurrence intent. */
export type ContentDueObject = {
  /** Authoritative ISO date or datetime. Template dues remain relative to the save day. */
  date: string;
  /** Supported date language metadata. */
  lang?: string | null;
  /** Display text or recurrence rule. It never overrides date and must agree with is_recurring. */
  string?: string | null;
  /**
   * Timezone name required for an offset-bearing date. Validated but dropped for floating dates.
   */
  timezone?: string | null;
  /** Whether string is a recurrence rule. Recurring dues require string. @default false */
  isRecurring?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentDueObjectProperties: s.Shape<ContentDueObject> = {
  date: s.string(),
  lang: s.optionalNullable(s.string()),
  string: s.optionalNullable(s.string()),
  timezone: s.optionalNullable(s.string()),
  isRecurring: s.defaulted(s.boolean(), false),
  _keysMap: {
    isRecurring: "is_recurring",
  },
};

export const contentDueObjectInternalSchema: Schema<ContentDueObject> = s.object<ContentDueObject>(
  contentDueObjectProperties,
  { additionalProperties: s.json() },
);

export const contentDueObjectSchema: Schema<ContentDueObject> = s.lazySchema(() =>
  s.object<ContentDueObject>(
    {
      ...contentDueObjectProperties,
      date: s.string().check(s.minLength(1), s.maxLength(64)),
      lang: s.optionalNullable(s.string().check(s.maxLength(10))),
      string: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      timezone: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(64))),
    },
    { additionalProperties: s.json() },
  ),
);
