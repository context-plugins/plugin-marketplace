import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  historyActionBranchCreateSchema,
  type HistoryActionBranchCreate,
} from "../history-action-branch-create.js";
import {
  historyActionBranchMergeSchema,
  type HistoryActionBranchMerge,
} from "../history-action-branch-merge.js";
import {
  historyActionBranchPushSchema,
  type HistoryActionBranchPush,
} from "../history-action-branch-push.js";
import {
  historyActionLabelCreateInternalSchema,
  historyActionLabelCreateSchema,
  type HistoryActionLabelCreate,
} from "../history-action-label-create.js";
import {
  historyActionLabelDeleteSchema,
  type HistoryActionLabelDelete,
} from "../history-action-label-delete.js";
import {
  historyActionLabelUpdateSchema,
  type HistoryActionLabelUpdate,
} from "../history-action-label-update.js";
import {
  historyActionProjectUpdateInternalSchema,
  historyActionProjectUpdateSchema,
  type HistoryActionProjectUpdate,
} from "../history-action-project-update.js";
import {
  historyActionPullRequestInternalSchema,
  historyActionPullRequestSchema,
  type HistoryActionPullRequest,
} from "../history-action-pull-request.js";
import {
  historyActionStoryCommentCreateInternalSchema,
  historyActionStoryCommentCreateSchema,
  type HistoryActionStoryCommentCreate,
} from "../history-action-story-comment-create.js";
import {
  historyActionStoryCreateInternalSchema,
  historyActionStoryCreateSchema,
  type HistoryActionStoryCreate,
} from "../history-action-story-create.js";
import {
  historyActionStoryDeleteSchema,
  type HistoryActionStoryDelete,
} from "../history-action-story-delete.js";
import {
  historyActionStoryLinkCreateSchema,
  type HistoryActionStoryLinkCreate,
} from "../history-action-story-link-create.js";
import {
  historyActionStoryLinkDeleteSchema,
  type HistoryActionStoryLinkDelete,
} from "../history-action-story-link-delete.js";
import {
  historyActionStoryLinkUpdateSchema,
  type HistoryActionStoryLinkUpdate,
} from "../history-action-story-link-update.js";
import {
  historyActionStoryUpdateInternalSchema,
  historyActionStoryUpdateSchema,
  type HistoryActionStoryUpdate,
} from "../history-action-story-update.js";
import {
  historyActionTaskCreateSchema,
  type HistoryActionTaskCreate,
} from "../history-action-task-create.js";
import {
  historyActionTaskDeleteSchema,
  type HistoryActionTaskDelete,
} from "../history-action-task-delete.js";
import {
  historyActionTaskUpdateSchema,
  type HistoryActionTaskUpdate,
} from "../history-action-task-update.js";
import {
  historyActionWorkspace2BulkUpdateSchema,
  type HistoryActionWorkspace2BulkUpdate,
} from "../history-action-workspace2-bulk-update.js";

export type Action1 =
  | HistoryActionBranchCreate
  | HistoryActionBranchMerge
  | HistoryActionBranchPush
  | HistoryActionLabelCreate
  | HistoryActionLabelUpdate
  | HistoryActionLabelDelete
  | HistoryActionProjectUpdate
  | HistoryActionPullRequest
  | HistoryActionStoryCreate
  | HistoryActionStoryUpdate
  | HistoryActionStoryDelete
  | HistoryActionStoryCommentCreate
  | HistoryActionStoryLinkCreate
  | HistoryActionStoryLinkUpdate
  | HistoryActionStoryLinkDelete
  | HistoryActionTaskCreate
  | HistoryActionTaskUpdate
  | HistoryActionTaskDelete
  | HistoryActionWorkspace2BulkUpdate;

export const action1InternalSchema: Schema<Action1> = s.of<Action1>(
  s.union([
    s.lazy(() => historyActionBranchCreateSchema),
    s.lazy(() => historyActionBranchMergeSchema),
    s.lazy(() => historyActionBranchPushSchema),
    s.lazy(() => historyActionLabelCreateInternalSchema),
    s.lazy(() => historyActionLabelUpdateSchema),
    s.lazy(() => historyActionLabelDeleteSchema),
    s.lazy(() => historyActionProjectUpdateInternalSchema),
    s.lazy(() => historyActionPullRequestInternalSchema),
    s.lazy(() => historyActionStoryCreateInternalSchema),
    s.lazy(() => historyActionStoryUpdateInternalSchema),
    s.lazy(() => historyActionStoryDeleteSchema),
    s.lazy(() => historyActionStoryCommentCreateInternalSchema),
    s.lazy(() => historyActionStoryLinkCreateSchema),
    s.lazy(() => historyActionStoryLinkUpdateSchema),
    s.lazy(() => historyActionStoryLinkDeleteSchema),
    s.lazy(() => historyActionTaskCreateSchema),
    s.lazy(() => historyActionTaskUpdateSchema),
    s.lazy(() => historyActionTaskDeleteSchema),
    s.lazy(() => historyActionWorkspace2BulkUpdateSchema),
  ]),
);

export const action1Schema: Schema<Action1> = s.lazySchema(() =>
  s.of<Action1>(
    s.union([
      s.lazy(() => historyActionBranchCreateSchema),
      s.lazy(() => historyActionBranchMergeSchema),
      s.lazy(() => historyActionBranchPushSchema),
      s.lazy(() => historyActionLabelCreateSchema),
      s.lazy(() => historyActionLabelUpdateSchema),
      s.lazy(() => historyActionLabelDeleteSchema),
      s.lazy(() => historyActionProjectUpdateSchema),
      s.lazy(() => historyActionPullRequestSchema),
      s.lazy(() => historyActionStoryCreateSchema),
      s.lazy(() => historyActionStoryUpdateSchema),
      s.lazy(() => historyActionStoryDeleteSchema),
      s.lazy(() => historyActionStoryCommentCreateSchema),
      s.lazy(() => historyActionStoryLinkCreateSchema),
      s.lazy(() => historyActionStoryLinkUpdateSchema),
      s.lazy(() => historyActionStoryLinkDeleteSchema),
      s.lazy(() => historyActionTaskCreateSchema),
      s.lazy(() => historyActionTaskUpdateSchema),
      s.lazy(() => historyActionTaskDeleteSchema),
      s.lazy(() => historyActionWorkspace2BulkUpdateSchema),
    ]),
  ),
);
