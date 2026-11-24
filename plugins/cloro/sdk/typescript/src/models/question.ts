import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";
import { type8Schema, type Type8 } from "./type8.js";

export type Question = {
  /** The question text. Empty when ChatGPT shows the control with no label. */
  label: string;
  /** The control that ChatGPT shows for the question. */
  type: Type8;
  /** The variable that `followUpPrompt` refers to as `{name}`. */
  name?: string;
  /** The placeholder of a `text`, `textarea` or `date` question, when ChatGPT gives one. */
  placeholder?: string;
  /**
   * The choices of a `radio`, `checkbox` or `select` question. Empty for `text`, `textarea` and
   * `date`.
   */
  options: Option[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const questionSchema: Schema<Question> = s.object<Question>(
  {
    label: s.string(),
    type: type8Schema,
    name: s.optional(s.string()),
    placeholder: s.optional(s.string()),
    options: s.array(s.lazy(() => optionSchema)),
  },
  { additionalProperties: s.json() },
);
