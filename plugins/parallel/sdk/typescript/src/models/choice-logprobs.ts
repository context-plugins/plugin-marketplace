import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./unions/content.js";
import { refusalSchema, type Refusal } from "./unions/refusal.js";

/** Log probability information for the choice. */
export type ChoiceLogprobs = {
  content?: Content;
  refusal?: Refusal;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choiceLogprobsSchema: Schema<ChoiceLogprobs> = s.object<ChoiceLogprobs>(
  {
    content: s.optional(s.lazy(() => contentSchema)),
    refusal: s.optional(s.lazy(() => refusalSchema)),
  },
  { additionalProperties: s.json() },
);
