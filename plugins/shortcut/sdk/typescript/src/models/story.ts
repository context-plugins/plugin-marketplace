import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { branchInternalSchema, branchSchema, type Branch } from "./branch.js";
import { commitSchema, type Commit } from "./commit.js";
import { labelSlimInternalSchema, labelSlimSchema, type LabelSlim } from "./label-slim.js";
import { linkedFileSchema, type LinkedFile } from "./linked-file.js";
import { pullRequestInternalSchema, pullRequestSchema, type PullRequest } from "./pull-request.js";
import { storyCommentSchema, type StoryComment } from "./story-comment.js";
import { storyCustomFieldSchema, type StoryCustomField } from "./story-custom-field.js";
import { storyStatsSchema, type StoryStats } from "./story-stats.js";
import { syncedItemSchema, type SyncedItem } from "./synced-item.js";
import { taskSchema, type Task } from "./task.js";
import { typedStoryLinkSchema, type TypedStoryLink } from "./typed-story-link.js";
import { uploadedFileSchema, type UploadedFile } from "./uploaded-file.js";

/**
 * Stories are the standard unit of work in Shortcut and represent individual features, bugs, and
 * chores.
 */
export type Story = {
  /** The Shortcut application url for the Story. */
  appUrl: string;
  /** The description of the story. */
  description: string;
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
  /** An array of linked files attached to the story. */
  linkedFiles: LinkedFile[];
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
  /** An array of comments attached to the story. */
  comments: StoryComment[];
  /** A true/false boolean indicating if the Story is currently a blocker of another story. */
  blocker: boolean;
  /** An array of Git branches attached to the story. */
  branches: Branch[];
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
  /** An array of tasks connected to the story. */
  tasks: Task[];
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
  /** An array of Pull/Merge Requests attached to the story. */
  pullRequests: PullRequest[];
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
  /** An array of commits attached to the story. */
  commits: Commit[];
  /** An array of files attached to the story. */
  files: UploadedFile[];
  /**
   * A number representing the position of the story in relation to every other story in the current
   * project.
   */
  position: number;
  /** A true/false boolean indicating if the Story is currently blocked. */
  blocked: boolean;
  /** The ID of the project the story belongs to. */
  projectId: number | null;
  /** The due date of the story. */
  deadline: Date | null;
  /** The stats object for Stories */
  stats: StoryStats;
  /** The cycle time (in seconds) of this story when complete. */
  cycleTime?: number;
  /** The time/date the Story was created. */
  createdAt: Date;
  /** The time/date the Story was last changed workflow-state. */
  movedAt: Date | null;
};

const storyProperties: s.Shape<Story> = {
  appUrl: s.string(),
  description: s.string(),
  archived: s.boolean(),
  started: s.boolean(),
  storyLinks: s.array(s.lazy(() => typedStoryLinkSchema)),
  entityType: s.string(),
  labels: s.array(s.lazy(() => labelSlimInternalSchema)),
  mentionIds: s.array(s.string()),
  syncedItem: s.optional(s.lazy(() => syncedItemSchema)),
  memberMentionIds: s.array(s.string()),
  storyType: s.string(),
  customFields: s.optional(s.array(s.lazy(() => storyCustomFieldSchema))),
  linkedFiles: s.array(s.lazy(() => linkedFileSchema)),
  workflowId: s.int(),
  completedAtOverride: s.nullable(s.dateTime()),
  startedAt: s.nullable(s.dateTime()),
  completedAt: s.nullable(s.dateTime()),
  name: s.string(),
  globalId: s.string(),
  completed: s.boolean(),
  comments: s.array(s.lazy(() => storyCommentSchema)),
  blocker: s.boolean(),
  branches: s.array(s.lazy(() => branchInternalSchema)),
  epicId: s.nullable(s.int()),
  storyTemplateId: s.nullable(s.string()),
  externalLinks: s.array(s.string()),
  previousIterationIds: s.array(s.int()),
  requestedById: s.string(),
  iterationId: s.nullable(s.int()),
  subTaskStoryIds: s.optional(s.array(s.int())),
  tasks: s.array(s.lazy(() => taskSchema)),
  formattedVcsBranchName: s.optionalNullable(s.string()),
  labelIds: s.array(s.int()),
  startedAtOverride: s.nullable(s.dateTime()),
  groupId: s.nullable(s.string()),
  workflowStateId: s.int(),
  updatedAt: s.nullable(s.dateTime()),
  pullRequests: s.array(s.lazy(() => pullRequestInternalSchema)),
  groupMentionIds: s.array(s.string()),
  followerIds: s.array(s.string()),
  ownerIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  leadTime: s.optional(s.int()),
  parentStoryId: s.optionalNullable(s.int()),
  estimate: s.nullable(s.int()),
  commits: s.array(s.lazy(() => commitSchema)),
  files: s.array(s.lazy(() => uploadedFileSchema)),
  position: s.int(),
  blocked: s.boolean(),
  projectId: s.nullable(s.int()),
  deadline: s.nullable(s.dateTime()),
  stats: storyStatsSchema,
  cycleTime: s.optional(s.int()),
  createdAt: s.dateTime(),
  movedAt: s.nullable(s.dateTime()),
  _keysMap: {
    appUrl: "app_url",
    storyLinks: "story_links",
    entityType: "entity_type",
    mentionIds: "mention_ids",
    syncedItem: "synced_item",
    memberMentionIds: "member_mention_ids",
    storyType: "story_type",
    customFields: "custom_fields",
    linkedFiles: "linked_files",
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
    pullRequests: "pull_requests",
    groupMentionIds: "group_mention_ids",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    leadTime: "lead_time",
    parentStoryId: "parent_story_id",
    projectId: "project_id",
    cycleTime: "cycle_time",
    createdAt: "created_at",
    movedAt: "moved_at",
  },
};

export const storyInternalSchema: Schema<Story> = s.object<Story>(storyProperties);

export const storySchema: Schema<Story> = s.lazySchema(() =>
  s.object<Story>({
    ...storyProperties,
    labels: s.array(s.lazy(() => labelSlimSchema)),
    branches: s.array(s.lazy(() => branchSchema)),
    pullRequests: s.array(s.lazy(() => pullRequestSchema)),
  }),
);
