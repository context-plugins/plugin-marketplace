import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Questions and answers generated from the story content. */
export type Question = {
  /** Question generated from the story content. */
  question?: string | null;
  /** Answer generated from the story content. */
  answer?: string | null;
  /** Article IDs supporting the answer. */
  references?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const questionSchema: Schema<Question> = s.object<Question>(
  {
    question: s.optionalNullable(s.string()),
    answer: s.optionalNullable(s.string()),
    references: s.optionalNullable(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
