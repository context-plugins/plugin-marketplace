import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotPriority = {
  /** The priority that Amazon Lex should apply to the slot. */
  priority: number;
  /** The unique identifier of the slot. */
  slotId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotPrioritySchema: Schema<SlotPriority> = s.object<SlotPriority>(
  {
    priority: s.int(),
    slotId: s.string(),
  },
  { additionalProperties: s.json() },
);
