import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Question = {
  id: string;
  question: string;
  answer: string | null;
  askedAt: string;
  answeredAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const questionSchema: Schema<Question> = s.object<Question>(
  {
    id: s.string(),
    question: s.string(),
    answer: s.nullable(s.string()),
    askedAt: s.string(),
    answeredAt: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
