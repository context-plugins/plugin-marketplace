import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type QuestionDeliverdDevCollectionsApi = {
  /** The question, as you would ask it out loud */
  prompt: string;
  /** The sentence under the field that stops the wrong answer being given */
  help?: string;
  /** What kind of answer: text, long_text, number, date, choice, multi_choice or boolean */
  kind: Kind;
  /** Required unless you say otherwise; a required question blocks submission */
  required?: boolean;
  /** The options, for choice and multi_choice. At least two, or the question is not one */
  options?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const questionDeliverdDevCollectionsApiProperties: s.Shape<QuestionDeliverdDevCollectionsApi> = {
  prompt: s.string(),
  help: s.optional(s.string()),
  kind: kindSchema,
  required: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
};

export const questionDeliverdDevCollectionsApiInternalSchema: Schema<QuestionDeliverdDevCollectionsApi> =
  s.object<QuestionDeliverdDevCollectionsApi>(questionDeliverdDevCollectionsApiProperties, {
    additionalProperties: s.json(),
  });

export const questionDeliverdDevCollectionsApiSchema: Schema<QuestionDeliverdDevCollectionsApi> =
  s.lazySchema(() =>
    s.object<QuestionDeliverdDevCollectionsApi>(
      {
        ...questionDeliverdDevCollectionsApiProperties,
        prompt: s.string().check(s.minLength(1), s.maxLength(1000)),
        help: s.optional(s.string().check(s.maxLength(1000))),
        options: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(200))).check(s.maxLength(20)),
        ),
      },
      { additionalProperties: s.json() },
    ),
  );
