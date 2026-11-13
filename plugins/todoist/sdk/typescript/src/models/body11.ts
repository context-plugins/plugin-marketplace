import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationUnitSchema, type DurationUnit } from "./duration-unit.js";

export type Body11 = {
  /** Task content. */
  content: string;
  /** Task description. */
  description?: string | null;
  /**
   * ID of the project to add the task to. If omitted or null, the task will be added to the user's
   * Inbox.
   */
  projectId?: string | null;
  /** ID of the section to add the task to */
  sectionId?: string | null;
  /** ID of the parent task */
  parentId?: string | null;
  /** Position of the task in the project or section */
  order?: number | null;
  /** List of label names. */
  labels?: string[] | null;
  /** Task priority (1-4, where 1 is highest) */
  priority?: number | null;
  /**
   * ID of the user to assign the task to. To find User IDs, use [Get
   * user](#operation/user_info_api_v1_user_get) for your own ID or [Get all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members.
   */
  assigneeId?: number | null;
  /**
   * Human-readable representation of the due date. See the [Due dates](#tag/Due-dates) section for
   * more details.
   */
  dueString?: string | null;
  /**
   * Due date in RFC 3339 format or similar. See the [Due dates](#tag/Due-dates) section for more
   * details.
   */
  dueDate?: string | null;
  /** Due date and time. See the [Due dates](#tag/Due-dates) section for more details. */
  dueDatetime?: string | null;
  /** Due date language code. See the [Due dates](#tag/Due-dates) section for more details. */
  dueLang?: string | null;
  /**
   * Task duration, as a positive whole number of minutes or days. The API accepts durations longer
   * than 24 hours, but the Todoist web and desktop date picker limits duration edits to 24 hours.
   * Only used if `duration_unit` is also provided.
   */
  duration?: number | null;
  /** Unit of time for duration. */
  durationUnit?: DurationUnit | null;
  /** Deadline date in YYYY-MM-DD format */
  deadlineDate?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body11Properties: s.Shape<Body11> = {
  content: s.string(),
  description: s.optionalNullable(s.string()),
  projectId: s.optionalNullable(s.string()),
  sectionId: s.optionalNullable(s.string()),
  parentId: s.optionalNullable(s.string()),
  order: s.optionalNullable(s.int()),
  labels: s.optionalNullable(s.array(s.string())),
  priority: s.optionalNullable(s.int()),
  assigneeId: s.optionalNullable(s.int()),
  dueString: s.optionalNullable(s.string()),
  dueDate: s.optionalNullable(s.string()),
  dueDatetime: s.optionalNullable(s.string()),
  dueLang: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.int()),
  durationUnit: s.optionalNullable(s.lazy(() => durationUnitSchema)),
  deadlineDate: s.optionalNullable(s.dateOnly()),
  _keysMap: {
    projectId: "project_id",
    sectionId: "section_id",
    parentId: "parent_id",
    assigneeId: "assignee_id",
    dueString: "due_string",
    dueDate: "due_date",
    dueDatetime: "due_datetime",
    dueLang: "due_lang",
    durationUnit: "duration_unit",
    deadlineDate: "deadline_date",
  },
};

export const body11InternalSchema: Schema<Body11> = s.object<Body11>(body11Properties, {
  additionalProperties: s.json(),
});

export const body11Schema: Schema<Body11> = s.lazySchema(() =>
  s.object<Body11>(
    {
      ...body11Properties,
      content: s.string().check(s.minLength(1)),
      order: s.optionalNullable(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      priority: s.optionalNullable(s.int().check(s.gte(1), s.lte(4))),
    },
    { additionalProperties: s.json() },
  ),
);
