import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { questionSchema, type Question } from "./question.js";

/**
 * The form that ChatGPT shows at the end of an answer to refine the prompt: questions with options,
 * and a button that sends a follow-up prompt. `null` when the answer has no form. The form is not
 * part of `text` or `markdown`. Schema at /api-reference/endpoint/chatgpt/follow-up-form.
 */
export type FollowUpForm = {
  /** The questions, in the order ChatGPT shows them. */
  questions: Question[];
  /** The label of the button that sends the follow-up prompt. */
  submitLabel?: string;
  /**
   * The prompt that the button sends, with `{name}` where ChatGPT puts the answer to the question
   * of that `name`. Absent when cloro cannot read it as a template.
   */
  followUpPrompt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const followUpFormSchema: Schema<FollowUpForm> = s.object<FollowUpForm>(
  {
    questions: s.array(s.lazy(() => questionSchema)),
    submitLabel: s.optional(s.string()),
    followUpPrompt: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
