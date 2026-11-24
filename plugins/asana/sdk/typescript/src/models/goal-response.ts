import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { likeSchema, type Like } from "./like.js";
import { metricSchema, type Metric } from "./metric.js";
import { statusUpdateCompactSchema, type StatusUpdateCompact } from "./status-update-compact.js";
import { teamSchema, type Team } from "./team.js";
import { timePeriodCompactSchema, type TimePeriodCompact } from "./time-period-compact.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type GoalResponse = {
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
  /** Array of likes for users who have liked this goal. */
  likes?: Like[];
  /** The number of users who have liked this goal. */
  numLikes?: number;
  /**
   * *Conditional*. This property is only present when the `workspace` provided is an organization.
   */
  team?: Team;
  workspace?: WorkspaceCompact;
  /** Array of users who are members of this goal. */
  followers?: UserCompact[];
  timePeriod?: TimePeriodCompact;
  metric?: Metric;
  owner?: UserCompact;
  /** The latest `status_update` posted to this goal. */
  currentStatusUpdate?: StatusUpdateCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalResponseSchema: Schema<GoalResponse> = s.object<GoalResponse>(
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
    likes: s.optional(s.array(s.lazy(() => likeSchema))),
    numLikes: s.optional(s.int()),
    team: s.optional(s.lazy(() => teamSchema)),
    workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
    followers: s.optional(s.array(s.lazy(() => userCompactSchema))),
    timePeriod: s.optional(s.lazy(() => timePeriodCompactSchema)),
    metric: s.optional(s.lazy(() => metricSchema)),
    owner: s.optional(s.lazy(() => userCompactSchema)),
    currentStatusUpdate: s.optional(s.lazy(() => statusUpdateCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      htmlNotes: "html_notes",
      dueOn: "due_on",
      startOn: "start_on",
      isWorkspaceLevel: "is_workspace_level",
      numLikes: "num_likes",
      timePeriod: "time_period",
      currentStatusUpdate: "current_status_update",
    },
  },
  { additionalProperties: s.json() },
);
