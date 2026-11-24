import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { choiceSchema, type Choice } from "./choice.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { widgetSchema, type Widget } from "./widget.js";

export type ChoicesResponseMessage = {
  /** Message type of a question with choices. @default "choices" */
  type?: "choices";
  /** UUID that references this message. */
  id: string;
  /** Array of answers to choose from. */
  choices: Choice[];
  /**
   * "Widget type of how answers appear in the client.
   *
   * * `buttons`—Answers appear in clickable pill boxes.
   * * `menu`—Answers appear in clickable boxes vertically stacked."
   */
  widget: Widget;
  schedule?: Schedule;
  /** unique ID to identify the generation, used to submit feedback */
  feedbackId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choicesResponseMessageSchema: Schema<ChoicesResponseMessage> = s.object<ChoicesResponseMessage>(
  {
    type: s.defaulted(s.literal("choices"), "choices"),
    id: s.string(),
    choices: s.array(s.lazy(() => choiceSchema)),
    widget: widgetSchema,
    schedule: s.optional(s.lazy(() => scheduleSchema)),
    feedbackId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
