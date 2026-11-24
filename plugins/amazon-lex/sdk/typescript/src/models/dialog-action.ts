import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type DialogAction = {
  /** The action that the bot should execute. */
  type: Type;
  /** If the dialog action is ElicitSlot, defines the slot to elicit from the user. */
  slotToElicit?: string;
  /** When true the next message for the intent is not used. */
  suppressNextMessage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogActionSchema: Schema<DialogAction> = s.object<DialogAction>(
  {
    type: typeSchema,
    slotToElicit: s.optional(s.string()),
    suppressNextMessage: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
