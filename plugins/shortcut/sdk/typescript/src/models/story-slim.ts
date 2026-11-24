import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelSlimInternalSchema, labelSlimSchema, type LabelSlim } from "./label-slim.js";
import { storyCustomFieldSchema, type StoryCustomField } from "./story-custom-field.js";
import { storyStatsSchema, type StoryStats } from "./story-stats.js";
import { syncedItemSchema, type SyncedItem } from "./synced-item.js";
import { typedStoryLinkSchema, type TypedStoryLink } from "./typed-story-link.js";

/**
 * StorySlim represents the same resource as a Story, but is more light-weight. For certain fields
 * it provides ids rather than full resources (e.g., `comment_ids` and `file_ids`) and it also
 * excludes certain aggregate values (e.g., `cycle_time`). The `description` field can be optionally
 * included. Use the [Get Story](#Get-Story) endpoint to fetch the unabridged payload for a Story.
 */
export type StorySlim = {
  /** The Shortcut application url for the Story. */
  appUrl: string;
  /** The description of the Story. */
  description?: string;
  /** True if the story has been archived or not. */
  archived: boolean;
  /** A true/false boolean indicating if the Story has been started. */
  started: boolean;
  /** An array of story links attached to the Story. */
  storyLinks: TypedStoryLink[];
  /** A string description of this resource. */
  entityType: string;
  /** An array of labels attached to the story. */
  labels: LabelSlim[];
  /** An array of IDs of Tasks attached to the story. */
  taskIds: number[];
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** The synced item for the story. */
  syncedItem?: SyncedItem;
  /** An array of Member IDs that have been mentioned in the Story description. */
  memberMentionIds: string[];
  /** The type of story (feature, bug, chore). */
  storyType: string;
  /** An array of CustomField value assertions for the story. */
  customFields?: StoryCustomField[];
  /** An array of IDs of Files attached to the story. */
  fileIds: number[];
  /** The number of tasks on the story which are complete. */
  numTasksCompleted: number;
  /** The ID of the workflow the story belongs to. */
  workflowId: number;
  /** A manual override for the time/date the Story was completed. */
  completedAtOverride: Date | null;
  /** The time/date the Story was started. */
  startedAt: Date | null;
  /** The time/date the Story was completed. */
  completedAt: Date | null;
  /** The name of the story. */
  name: string;
  globalId: string;
  /** A true/false boolean indicating if the Story has been completed. */
  completed: boolean;
  /** A true/false boolean indicating if the Story is currently a blocker of another story. */
  blocker: boolean;
  /** The ID of the epic the story belongs to. */
  epicId: number | null;
  /**
   * The ID of the story template used to create this story, or null if not created using a
   * template.
   */
  storyTemplateId: string | null;
  /** An array of external links (strings) associated with a Story */
  externalLinks: string[];
  /** The IDs of the iteration the story belongs to. */
  previousIterationIds: number[];
  /** The ID of the Member that requested the story. */
  requestedById: string;
  /** The ID of the iteration the story belongs to. */
  iterationId: number | null;
  /**
   * The Story IDs of Sub-tasks attached to the Story Field only applicable when Sub-task feature is
   * enabled.
   */
  subTaskStoryIds?: number[];
  /** The formatted branch name for this story. */
  formattedVcsBranchName?: string | null;
  /** An array of label ids attached to the story. */
  labelIds: number[];
  /** A manual override for the time/date the Story was started. */
  startedAtOverride: Date | null;
  /** The ID of the group associated with the story. */
  groupId: string | null;
  /** The ID of the workflow state the story is currently in. */
  workflowStateId: number;
  /** The time/date the Story was updated. */
  updatedAt: Date | null;
  /** An array of Group IDs that have been mentioned in the Story description. */
  groupMentionIds: string[];
  /** An array of UUIDs for any Members listed as Followers. */
  followerIds: string[];
  /** An array of UUIDs of the owners of this story. */
  ownerIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Story. */
  id: number;
  /** The lead time (in seconds) of this story when complete. */
  leadTime?: number;
  /**
   * The ID of the parent story to this story (making this story a sub-task). Field only applicable
   * when Sub-task feature is enabled.
   */
  parentStoryId?: number | null;
  /** The numeric point estimate of the story. Can also be null, which means unestimated. */
  estimate: number | null;
  /**
   * A number representing the position of the story in relation to every other story in the current
   * project.
   */
  position: number;
  /** A true/false boolean indicating if the Story is currently blocked. */
  blocked: boolean;
  /** The ID of the project the story belongs to. */
  projectId: number | null;
  /** An array of IDs of LinkedFiles attached to the story. */
  linkedFileIds: number[];
  /** The due date of the story. */
  deadline: Date | null;
  /** The stats object for Stories */
  stats: StoryStats;
  /** An array of IDs of Comments attached to the story. */
  commentIds: number[];
  /** The cycle time (in seconds) of this story when complete. */
  cycleTime?: number;
  /** The time/date the Story was created. */
  createdAt: Date;
  /** The time/date the Story was last changed workflow-state. */
  movedAt: Date | null;
};

const storySlimProperties: s.Shape<StorySlim> = {
  appUrl: s.string(),
  description: s.optional(s.string()),
  archived: s.boolean(),
  started: s.boolean(),
  storyLinks: s.array(s.lazy(() => typedStoryLinkSchema)),
  entityType: s.string(),
  labels: s.array(s.lazy(() => labelSlimInternalSchema)),
  taskIds: s.array(s.int()),
  mentionIds: s.array(s.string()),
  syncedItem: s.optional(s.lazy(() => syncedItemSchema)),
  memberMentionIds: s.array(s.string()),
  storyType: s.string(),
  customFields: s.optional(s.array(s.lazy(() => storyCustomFieldSchema))),
  fileIds: s.array(s.int()),
  numTasksCompleted: s.int(),
  workflowId: s.int(),
  completedAtOverride: s.nullable(s.dateTime()),
  startedAt: s.nullable(s.dateTime()),
  completedAt: s.nullable(s.dateTime()),
  name: s.string(),
  globalId: s.string(),
  completed: s.boolean(),
  blocker: s.boolean(),
  epicId: s.nullable(s.int()),
  storyTemplateId: s.nullable(s.string()),
  externalLinks: s.array(s.string()),
  previousIterationIds: s.array(s.int()),
  requestedById: s.string(),
  iterationId: s.nullable(s.int()),
  subTaskStoryIds: s.optional(s.array(s.int())),
  formattedVcsBranchName: s.optionalNullable(s.string()),
  labelIds: s.array(s.int()),
  startedAtOverride: s.nullable(s.dateTime()),
  groupId: s.nullable(s.string()),
  workflowStateId: s.int(),
  updatedAt: s.nullable(s.dateTime()),
  groupMentionIds: s.array(s.string()),
  followerIds: s.array(s.string()),
  ownerIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  leadTime: s.optional(s.int()),
  parentStoryId: s.optionalNullable(s.int()),
  estimate: s.nullable(s.int()),
  position: s.int(),
  blocked: s.boolean(),
  projectId: s.nullable(s.int()),
  linkedFileIds: s.array(s.int()),
  deadline: s.nullable(s.dateTime()),
  stats: storyStatsSchema,
  commentIds: s.array(s.int()),
  cycleTime: s.optional(s.int()),
  createdAt: s.dateTime(),
  movedAt: s.nullable(s.dateTime()),
  _keysMap: {
    appUrl: "app_url",
    storyLinks: "story_links",
    entityType: "entity_type",
    taskIds: "task_ids",
    mentionIds: "mention_ids",
    syncedItem: "synced_item",
    memberMentionIds: "member_mention_ids",
    storyType: "story_type",
    customFields: "custom_fields",
    fileIds: "file_ids",
    numTasksCompleted: "num_tasks_completed",
    workflowId: "workflow_id",
    completedAtOverride: "completed_at_override",
    startedAt: "started_at",
    completedAt: "completed_at",
    globalId: "global_id",
    epicId: "epic_id",
    storyTemplateId: "story_template_id",
    externalLinks: "external_links",
    previousIterationIds: "previous_iteration_ids",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    subTaskStoryIds: "sub_task_story_ids",
    formattedVcsBranchName: "formatted_vcs_branch_name",
    labelIds: "label_ids",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    leadTime: "lead_time",
    parentStoryId: "parent_story_id",
    projectId: "project_id",
    linkedFileIds: "linked_file_ids",
    commentIds: "comment_ids",
    cycleTime: "cycle_time",
    createdAt: "created_at",
    movedAt: "moved_at",
  },
};

export const storySlimInternalSchema: Schema<StorySlim> = s.object<StorySlim>(storySlimProperties);

export const storySlimSchema: Schema<StorySlim> = s.lazySchema(() =>
  s.object<StorySlim>({
    ...storySlimProperties,
    labels: s.array(s.lazy(() => labelSlimSchema)),
  }),
);
