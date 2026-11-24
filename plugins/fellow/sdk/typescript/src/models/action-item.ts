import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionItemAssigneeSchema, type ActionItemAssignee } from "./action-item-assignee.js";
import { actionItemStatusSchema, type ActionItemStatus } from "./action-item-status.js";
import { completionTypeSchema, type CompletionType } from "./completion-type.js";

/** API model for action items. Action items are stored as NoteBlock objects with type='todo'. */
export type ActionItem = {
  id?: string;
  text?: string;
  status?: ActionItemStatus;
  createdAt?: Date;
  updatedAt?: Date;
  dueDate?: string | null;
  noteId?: string | null;
  assignees?: ActionItemAssignee[];
  completionType?: CompletionType;
  aiDetected?: boolean;
  recordingOffset?: number | null;
  aiSuggestionAcceptedByUser?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionItemSchema: Schema<ActionItem> = s.object<ActionItem>(
  {
    id: s.optional(s.string()),
    text: s.optional(s.string()),
    status: s.optional(s.lazy(() => actionItemStatusSchema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    dueDate: s.optionalNullable(s.string()),
    noteId: s.optionalNullable(s.string()),
    assignees: s.optional(s.array(s.lazy(() => actionItemAssigneeSchema))),
    completionType: s.optional(s.lazy(() => completionTypeSchema)),
    aiDetected: s.optional(s.boolean()),
    recordingOffset: s.optionalNullable(s.float64()),
    aiSuggestionAcceptedByUser: s.optional(s.boolean()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      dueDate: "due_date",
      noteId: "note_id",
      completionType: "completion_type",
      aiDetected: "ai_detected",
      recordingOffset: "recording_offset",
      aiSuggestionAcceptedByUser: "ai_suggestion_accepted_by_user",
    },
  },
  { additionalProperties: s.json() },
);
