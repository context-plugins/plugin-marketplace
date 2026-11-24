import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PollChoice = {
  /** The unique identifier of the poll choice. */
  id: string;
  /** The text label for this choice. */
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollChoiceSchema: Schema<PollChoice> = s.object<PollChoice>(
  {
    id: s.string(),
    label: s.string(),
  },
  { additionalProperties: s.json() },
);
