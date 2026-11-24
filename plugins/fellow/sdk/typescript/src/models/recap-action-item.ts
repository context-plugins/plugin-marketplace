import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionItemAssigneeSchema, type ActionItemAssignee } from "./action-item-assignee.js";
import { actionItemStatusSchema, type ActionItemStatus } from "./action-item-status.js";
import { completionTypeSchema, type CompletionType } from "./completion-type.js";

export type RecapActionItem = {
  timestamp: number;
  text: string;
  id?: string | null;
  assignees: ActionItemAssignee[];
  completionType: CompletionType | null;
  dueDate?: string | null;
  accepted: boolean;
  status: ActionItemStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapActionItemSchema: Schema<RecapActionItem> = s.object<RecapActionItem>(
  {
    timestamp: s.int(),
    text: s.string(),
    id: s.optionalNullable(s.string()),
    assignees: s.array(s.lazy(() => actionItemAssigneeSchema)),
    completionType: s.nullable(s.lazy(() => completionTypeSchema)),
    dueDate: s.optionalNullable(s.string()),
    accepted: s.boolean(),
    status: actionItemStatusSchema,
    _keysMap: {
      completionType: "completion_type",
      dueDate: "due_date",
    },
  },
  { additionalProperties: s.json() },
);
