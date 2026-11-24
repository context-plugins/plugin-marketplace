import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { requiredSchema, type Required } from "./unions/required.js";

/** An argument for a prompt template. */
export type PromptArgument = {
  name: string;
  description?: Description;
  required?: Required;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptArgumentSchema: Schema<PromptArgument> = s.object<PromptArgument>(
  {
    name: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    required: s.optional(s.lazy(() => requiredSchema)),
  },
  { additionalProperties: s.json() },
);
