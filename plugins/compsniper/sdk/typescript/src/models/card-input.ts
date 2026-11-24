import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardNumberSchema, type CardNumber } from "./unions/card-number.js";
import { gradeVariantZwxcfrSchema, type GradeVariantZwxcfr } from "./unions/grade-variant-zwxcfr.js";
import { yearSchema, type Year } from "./unions/year.js";

/**
 * Supply an exact keyword, or structured fields. subject is universal; player and character are
 * convenient aliases.
 */
export type CardInput = {
  /** Your inventory or correlation ID, echoed in the result. */
  reference?: string;
  /** Exact eBay search keyword. When present it overrides generated structured-field keywords. */
  keyword?: string;
  subject?: string;
  player?: string;
  character?: string;
  year?: Year;
  set?: string;
  cardNumber?: CardNumber;
  parallel?: string;
  grader?: string;
  grade?: GradeVariantZwxcfr;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardInputProperties: s.Shape<CardInput> = {
  reference: s.optional(s.string()),
  keyword: s.optional(s.string()),
  subject: s.optional(s.string()),
  player: s.optional(s.string()),
  character: s.optional(s.string()),
  year: s.optional(s.lazy(() => yearSchema)),
  set: s.optional(s.string()),
  cardNumber: s.optional(s.lazy(() => cardNumberSchema)),
  parallel: s.optional(s.string()),
  grader: s.optional(s.string()),
  grade: s.optional(s.lazy(() => gradeVariantZwxcfrSchema)),
};

export const cardInputInternalSchema: Schema<CardInput> = s.object<CardInput>(cardInputProperties, {
  additionalProperties: s.json(),
});

export const cardInputSchema: Schema<CardInput> = s.lazySchema(() =>
  s.object<CardInput>(
    {
      ...cardInputProperties,
      keyword: s.optional(s.string().check(s.maxLength(300))),
    },
    { additionalProperties: s.json() },
  ),
);
