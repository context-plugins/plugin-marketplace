import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvalStatusSchema, type ApprovalStatus } from "./approval-status.js";
import { asanaResourceSchema, type AsanaResource } from "./asana-resource.js";
import { assigneeStatusSchema, type AssigneeStatus } from "./assignee-status.js";
import { externalSchema, type External } from "./external.js";
import { likeSchema, type Like } from "./like.js";
import { membershipSchema, type Membership } from "./membership.js";
import {
  resourceSubtype1AsanaProjectsApiSchema,
  type ResourceSubtype1AsanaProjectsApi,
} from "./resource-subtype1-asana-projects-api.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type TaskRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the task. */
  name?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning. The
   * resource_subtype `milestone` represent a single moment in time. This means tasks with this
   * subtype cannot have a start_date.
   */
  resourceSubtype?: ResourceSubtype1AsanaProjectsApi;
  /**
   * *Conditional* Reflects the approval status of this task. This field is kept in sync with
   * `completed`, meaning `pending` translates to false while `approved`, `rejected`, and
   * `changes_requested` translate to true. If you set completed to true, this field will be set to
   * `approved`.
   */
  approvalStatus?: ApprovalStatus;
  /**
   * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only
   * be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at
   * the top of the section, while the other options will insert at the bottom.
   */
  assigneeStatus?: AssigneeStatus;
  /** True if the task is currently marked complete, false if not. */
  completed?: boolean;
  /** The time at which this task was completed, or null if the task is incomplete. */
  completedAt?: Date | null;
  completedBy?: UserCompact;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * [Opt In](/docs/input-output-options). Array of resources referencing tasks that this task
   * depends on. The objects contain only the gid of the dependency.
   */
  dependencies?: AsanaResource[];
  /**
   * [Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this
   * task. The objects contain only the ID of the dependent.
   */
  dependents?: AsanaResource[];
  /**
   * The UTC date and time on which this task is due, or null if the task has no due time. This
   * takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
   */
  dueAt?: string | null;
  /**
   * The localized date on which this task is due, or null if the task has no due date. This takes a
   * date with `YYYY-MM-DD` format and should not be used together with `due_at`.
   */
  dueOn?: string | null;
  /**
   * *OAuth Required*. *Conditional*. This field is returned only if external values are set or
   * included by using [Opt In] (/docs/input-output-options). The external field allows you to store
   * app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data
   * blob that can store app-specific character strings. Note that you will need to authenticate
   * with Oauth to access or modify this data. Once an external gid is set, you can use the notation
   * `external:custom_gid` to reference your object anywhere in the API where you may use the
   * original object gid. See the page on Custom External Data for more details.
   */
  external?: External;
  /** [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML. */
  htmlNotes?: string;
  /**
   * *Deprecated - please use liked instead* True if the task is hearted by the authorized user,
   * false if not.
   */
  hearted?: boolean;
  /**
   * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
   */
  hearts?: Like[];
  /**
   * [Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual
   * separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections)
   * without being true `section` objects. If a `task` object is rendered this way in any context it
   * will have the property `is_rendered_as_separator` set to `true`.
   */
  isRenderedAsSeparator?: boolean;
  /** True if the task is liked by the authorized user, false if not. */
  liked?: boolean;
  /** Array of likes for users who have liked this task. */
  likes?: Like[];
  /**
   * *Create-only*. Array of projects this task is associated with and the section it is in. At task
   * creation time, this array can be used to add the task to specific sections. After task
   * creation, these associations can be modified using the `addProject` and `removeProject`
   * endpoints. Note that over time, more types of memberships may be added to this property.
   */
  memberships?: Membership[];
  /**
   * The time at which this task was last modified.
   *
   * *Note: This does not currently reflect any changes in associations such as projects or comments
   * that may have been added or removed from the task.*
   */
  modifiedAt?: Date;
  /** Free-form textual information associated with the task (i.e. its description). */
  notes?: string;
  /** *Deprecated - please use likes instead* The number of users who have hearted this task. */
  numHearts?: number;
  /** The number of users who have liked this task. */
  numLikes?: number;
  /** [Opt In](/docs/input-output-options). The number of subtasks on this task. */
  numSubtasks?: number;
  /**
   * Date and time on which work begins for the task, or null if the task has no start time. This
   * takes an ISO 8601 date string in UTC and should not be used together with `start_on`. *Note:
   * `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
   */
  startAt?: string | null;
  /**
   * The day on which work begins for the task , or null if the task has no start date. This takes a
   * date with `YYYY-MM-DD` format and should not be used together with `start_at`. *Note: `due_on`
   * or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
   */
  startOn?: string | null;
  /**
   * This value represents the sum of all the Time Tracking entries in the Actual Time field on a
   * given Task. It is represented as a nullable long value.
   */
  actualTimeMinutes?: number | null;
  /** Gid of a user. */
  assignee?: string | null;
  /**
   * The *assignee section* is a subdivision of a project that groups tasks together in the
   * assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a
   * column in a board view of "My Tasks." The `assignee_section` property will be returned in the
   * response only if the request was sent by the user who is the assignee of the task. Note that
   * you can only write to `assignee_section` with the gid of an existing section visible in the
   * user's "My Tasks" list.
   */
  assigneeSection?: string | null;
  /**
   * An object where each key is a Custom Field GID and each value is an enum GID, string, number,
   * object, or array.
   */
  customFields?: Record<string, string>;
  /**
   * *Create-Only* An array of strings identifying users. These can either be the string "me", an
   * email, or the gid of a user. In order to change followers on an existing task use
   * `addFollowers` and `removeFollowers`.
   */
  followers?: string[];
  /** Gid of a task. */
  parent?: string | null;
  /**
   * *Create-Only* Array of project gids. In order to change projects on an existing task use
   * `addProject` and `removeProject`.
   */
  projects?: string[];
  /**
   * *Create-Only* Array of tag gids. In order to change tags on an existing task use `addTag` and
   * `removeTag`.
   */
  tags?: string[];
  /** Gid of a workspace. */
  workspace?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRequestSchema: Schema<TaskRequest> = s.object<TaskRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtype1AsanaProjectsApiSchema)),
    approvalStatus: s.optional(s.lazy(() => approvalStatusSchema)),
    assigneeStatus: s.optional(s.lazy(() => assigneeStatusSchema)),
    completed: s.optional(s.boolean()),
    completedAt: s.optionalNullable(s.dateTime()),
    completedBy: s.optional(s.lazy(() => userCompactSchema)),
    createdAt: s.optional(s.dateTime()),
    dependencies: s.optional(s.array(s.lazy(() => asanaResourceSchema))),
    dependents: s.optional(s.array(s.lazy(() => asanaResourceSchema))),
    dueAt: s.optionalNullable(s.dateOnly()),
    dueOn: s.optionalNullable(s.dateOnly()),
    external: s.optional(s.lazy(() => externalSchema)),
    htmlNotes: s.optional(s.string()),
    hearted: s.optional(s.boolean()),
    hearts: s.optional(s.array(s.lazy(() => likeSchema))),
    isRenderedAsSeparator: s.optional(s.boolean()),
    liked: s.optional(s.boolean()),
    likes: s.optional(s.array(s.lazy(() => likeSchema))),
    memberships: s.optional(s.array(s.lazy(() => membershipSchema))),
    modifiedAt: s.optional(s.dateTime()),
    notes: s.optional(s.string()),
    numHearts: s.optional(s.int()),
    numLikes: s.optional(s.int()),
    numSubtasks: s.optional(s.int()),
    startAt: s.optionalNullable(s.dateOnly()),
    startOn: s.optionalNullable(s.dateOnly()),
    actualTimeMinutes: s.optionalNullable(s.float64()),
    assignee: s.optionalNullable(s.string()),
    assigneeSection: s.optionalNullable(s.string()),
    customFields: s.optional(s.record(s.string(), s.string())),
    followers: s.optional(s.array(s.string())),
    parent: s.optionalNullable(s.string()),
    projects: s.optional(s.array(s.string())),
    tags: s.optional(s.array(s.string())),
    workspace: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
      approvalStatus: "approval_status",
      assigneeStatus: "assignee_status",
      completedAt: "completed_at",
      completedBy: "completed_by",
      createdAt: "created_at",
      dueAt: "due_at",
      dueOn: "due_on",
      htmlNotes: "html_notes",
      isRenderedAsSeparator: "is_rendered_as_separator",
      modifiedAt: "modified_at",
      numHearts: "num_hearts",
      numLikes: "num_likes",
      numSubtasks: "num_subtasks",
      startAt: "start_at",
      startOn: "start_on",
      actualTimeMinutes: "actual_time_minutes",
      assigneeSection: "assignee_section",
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
