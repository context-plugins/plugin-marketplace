import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents an assignee of an action item. */
export type ActionItemAssignee = {
  id: string;
  fullName: string;
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionItemAssigneeSchema: Schema<ActionItemAssignee> = s.object<ActionItemAssignee>(
  {
    id: s.string(),
    fullName: s.string(),
    email: s.string(),
    _keysMap: {
      fullName: "full_name",
    },
  },
  { additionalProperties: s.json() },
);
