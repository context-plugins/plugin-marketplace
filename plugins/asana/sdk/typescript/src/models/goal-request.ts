import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoalRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the goal. */
  name?: string;
  /** The notes of the goal with formatting as HTML. */
  htmlNotes?: string;
  /** Free-form textual information associated with the goal (i.e. its description). */
  notes?: string;
  /** The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`. */
  dueOn?: string | null;
  /**
   * The day on which work for this goal begins, or null if the goal has no start date. This takes a
   * date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
   */
  startOn?: string | null;
  /**
   * The current status of this goal. When the goal is open, its status can be `green`, `yellow`,
   * and `red` to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is
   * closed, the value can be `missed`, `achieved`, `partial`, or `dropped`. *Note* you can only
   * write to this property if `metric` is set.
   */
  status?: string | null;
  /**
   * *Conditional*. This property is only present when the `workspace` provided is an organization.
   * Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or
   * not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the
   * goal’s team.
   */
  isWorkspaceLevel?: boolean;
  /** True if the goal is liked by the authorized user, false if not. */
  liked?: boolean;
  /**
   * *Conditional*. This property is only present when the `workspace` provided is an organization.
   */
  team?: string | null;
  /** The `gid` of a workspace. */
  workspace?: string;
  followers?: string[];
  /** The `gid` of a time period. */
  timePeriod?: string | null;
  /** The `gid` of a user. */
  owner?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRequestSchema: Schema<GoalRequest> = s.object<GoalRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    htmlNotes: s.optional(s.string()),
    notes: s.optional(s.string()),
    dueOn: s.optionalNullable(s.string()),
    startOn: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.string()),
    isWorkspaceLevel: s.optional(s.boolean()),
    liked: s.optional(s.boolean()),
    team: s.optionalNullable(s.string()),
    workspace: s.optional(s.string()),
    followers: s.optional(s.array(s.string())),
    timePeriod: s.optionalNullable(s.string()),
    owner: s.optionalNullable(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      htmlNotes: "html_notes",
      dueOn: "due_on",
      startOn: "start_on",
      isWorkspaceLevel: "is_workspace_level",
      timePeriod: "time_period",
    },
  },
  { additionalProperties: s.json() },
);
