import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionItemSchema, type ActionItem } from "./action-item.js";

/** Response containing a single action item. */
export type ActionItemResponse = {
  /** API model for action items. Action items are stored as NoteBlock objects with type='todo'. */
  actionItem: ActionItem;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionItemResponseSchema: Schema<ActionItemResponse> = s.object<ActionItemResponse>(
  {
    actionItem: actionItemSchema,
    _keysMap: {
      actionItem: "action_item",
    },
  },
  { additionalProperties: s.json() },
);
