import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationUnit1Schema, type DurationUnit1 } from "./duration-unit1.js";

export type Body23 = {
  /** Updated task content. Omit this field to keep it unchanged. */
  content?: string;
  /** Updated task description. Omit this field to keep it unchanged. */
  description?: string;
  /** Updated list of label names. Omit this field to keep it unchanged. */
  labels?: string[];
  /** Updated task priority (1-4, where 1 is highest). Omit this field to keep it unchanged. */
  priority?: number;
  /**
   * Updated human-readable representation of the due date. See the [Due dates](#tag/Due-dates)
   * section for more details. Omit this field to keep it unchanged.
   */
  dueString?: string;
  /**
   * Updated due date in RFC 3339 format or similar. See the [Due dates](#tag/Due-dates) section for
   * more details. Omit this field to keep it unchanged.
   */
  dueDate?: string;
  /**
   * Updated due date and time. See the [Due dates](#tag/Due-dates) section for more details. Omit
   * this field to keep it unchanged.
   */
  dueDatetime?: string;
  /**
   * Updated due date language code. See the [Due dates](#tag/Due-dates) section for more details.
   * Omit this field to keep it unchanged.
   */
  dueLang?: string;
  /**
   * ID of the user to assign the task to. To find User IDs, use [Get
   * user](#operation/user_info_api_v1_user_get) for your own ID or [Get all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members. Pass null to clear the value. Omit this field to keep it unchanged.
   */
  assigneeId?: number | null;
  /**
   * Updated task duration, as a positive whole number of minutes or days. The API accepts durations
   * longer than 24 hours, but the Todoist web and desktop date picker limits duration edits to 24
   * hours. Only used if `duration_unit` is also provided. Pass null to clear the value. Omit this
   * field to keep it unchanged.
   */
  duration?: number | null;
  /**
   * Unit of time for duration. Must be provided to update the task duration. Pass null to clear the
   * value. Omit this field to keep it unchanged.
   */
  durationUnit?: DurationUnit1 | null;
  /**
   * Updated deadline date in YYYY-MM-DD format. Pass null to clear the value. Omit this field to
   * keep it unchanged.
   */
  deadlineDate?: string | null;
  /** Updated position of the task in its current scope. Omit this field to keep it unchanged. */
  childOrder?: number;
  /**
   * Updated collapsed state of the task for the current user. Omit this field to keep it unchanged.
   */
  isCollapsed?: boolean;
  /**
   * Updated position of the task in Today and Upcoming views. Omit this field to keep it unchanged.
   */
  dayOrder?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body23Properties: s.Shape<Body23> = {
  content: s.optional(s.string()),
  description: s.optional(s.string()),
  labels: s.optional(s.array(s.string())),
  priority: s.optional(s.int()),
  dueString: s.optional(s.string()),
  dueDate: s.optional(s.string()),
  dueDatetime: s.optional(s.string()),
  dueLang: s.optional(s.string()),
  assigneeId: s.optionalNullable(s.int()),
  duration: s.optionalNullable(s.int()),
  durationUnit: s.optionalNullable(s.lazy(() => durationUnit1Schema)),
  deadlineDate: s.optionalNullable(s.dateOnly()),
  childOrder: s.optional(s.int()),
  isCollapsed: s.optional(s.boolean()),
  dayOrder: s.optional(s.int()),
  _keysMap: {
    dueString: "due_string",
    dueDate: "due_date",
    dueDatetime: "due_datetime",
    dueLang: "due_lang",
    assigneeId: "assignee_id",
    durationUnit: "duration_unit",
    deadlineDate: "deadline_date",
    childOrder: "child_order",
    isCollapsed: "is_collapsed",
    dayOrder: "day_order",
  },
};

export const body23InternalSchema: Schema<Body23> = s.object<Body23>(body23Properties, {
  additionalProperties: s.json(),
});

export const body23Schema: Schema<Body23> = s.lazySchema(() =>
  s.object<Body23>(
    {
      ...body23Properties,
      priority: s.optional(s.int().check(s.gte(1), s.lte(4))),
      childOrder: s.optional(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      dayOrder: s.optional(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
    },
    { additionalProperties: s.json() },
  ),
);
