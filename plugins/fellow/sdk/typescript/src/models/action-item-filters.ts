import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type ActionItemFilters = {
  /**
   * Only return action items created at or after this date. Accepts YYYY-MM-DD or an ISO datetime,
   * and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05
   * excludes everything later that day.
   */
  createdAtStart?: string | null;
  /**
   * Only return action items created at or before this date. Accepts YYYY-MM-DD or an ISO datetime,
   * and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05
   * excludes everything later that day.
   */
  createdAtEnd?: string | null;
  /**
   * Only return action items updated at or after this date. Accepts YYYY-MM-DD or an ISO datetime,
   * and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05
   * excludes everything later that day. Whether updated_at moves depends on where the change was
   * made. Edits in the note itself, including its text, completion, assignees and due date, all
   * bump updated_at. An assignee or due date changed outside the note, such as from the action
   * items list, is written to a separate record and leaves updated_at unchanged, so this filter
   * does not pick that item up.
   */
  updatedAtStart?: string | null;
  /**
   * Only return action items updated at or before this date. Accepts YYYY-MM-DD or an ISO datetime,
   * and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05
   * excludes everything later that day. Whether updated_at moves depends on where the change was
   * made. Edits in the note itself, including its text, completion, assignees and due date, all
   * bump updated_at. An assignee or due date changed outside the note, such as from the action
   * items list, is written to a separate record and leaves updated_at unchanged, so this filter
   * does not pick that item up.
   */
  updatedAtEnd?: string | null;
  completed?: boolean | null;
  archived?: boolean | null;
  aiDetected?: boolean | null;
  aiSuggestionAcceptedByUser?: boolean | null;
  scope?: Scope | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionItemFiltersSchema: Schema<ActionItemFilters> = s.object<ActionItemFilters>(
  {
    createdAtStart: s.optionalNullable(s.string()),
    createdAtEnd: s.optionalNullable(s.string()),
    updatedAtStart: s.optionalNullable(s.string()),
    updatedAtEnd: s.optionalNullable(s.string()),
    completed: s.optionalNullable(s.boolean()),
    archived: s.optionalNullable(s.boolean()),
    aiDetected: s.optionalNullable(s.boolean()),
    aiSuggestionAcceptedByUser: s.optionalNullable(s.boolean()),
    scope: s.optionalNullable(s.lazy(() => scopeSchema)),
    _keysMap: {
      createdAtStart: "created_at_start",
      createdAtEnd: "created_at_end",
      updatedAtStart: "updated_at_start",
      updatedAtEnd: "updated_at_end",
      aiDetected: "ai_detected",
      aiSuggestionAcceptedByUser: "ai_suggestion_accepted_by_user",
    },
  },
  { additionalProperties: s.json() },
);
