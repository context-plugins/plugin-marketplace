from __future__ import annotations

from typing import TypeAlias

from ..history_action_branch_create import HistoryActionBranchCreate, HistoryActionBranchCreateDict
from ..history_action_branch_merge import HistoryActionBranchMerge, HistoryActionBranchMergeDict
from ..history_action_branch_push import HistoryActionBranchPush, HistoryActionBranchPushDict
from ..history_action_label_create import HistoryActionLabelCreate, HistoryActionLabelCreateDict
from ..history_action_label_delete import HistoryActionLabelDelete, HistoryActionLabelDeleteDict
from ..history_action_label_update import HistoryActionLabelUpdate, HistoryActionLabelUpdateDict
from ..history_action_project_update import HistoryActionProjectUpdate, HistoryActionProjectUpdateDict
from ..history_action_pull_request import HistoryActionPullRequest, HistoryActionPullRequestDict
from ..history_action_story_comment_create import HistoryActionStoryCommentCreate, HistoryActionStoryCommentCreateDict
from ..history_action_story_create import HistoryActionStoryCreate, HistoryActionStoryCreateDict
from ..history_action_story_delete import HistoryActionStoryDelete, HistoryActionStoryDeleteDict
from ..history_action_story_link_create import HistoryActionStoryLinkCreate, HistoryActionStoryLinkCreateDict
from ..history_action_story_link_delete import HistoryActionStoryLinkDelete, HistoryActionStoryLinkDeleteDict
from ..history_action_story_link_update import HistoryActionStoryLinkUpdate, HistoryActionStoryLinkUpdateDict
from ..history_action_story_update import HistoryActionStoryUpdate, HistoryActionStoryUpdateDict
from ..history_action_task_create import HistoryActionTaskCreate, HistoryActionTaskCreateDict
from ..history_action_task_delete import HistoryActionTaskDelete, HistoryActionTaskDeleteDict
from ..history_action_task_update import HistoryActionTaskUpdate, HistoryActionTaskUpdateDict
from ..history_action_workspace2_bulk_update import (
    HistoryActionWorkspace2BulkUpdate,
    HistoryActionWorkspace2BulkUpdateDict,
)

Action1: TypeAlias = (
    HistoryActionBranchCreate
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
    | HistoryActionWorkspace2BulkUpdate
)

Action1Dict: TypeAlias = (
    HistoryActionBranchCreateDict
    | HistoryActionBranchMergeDict
    | HistoryActionBranchPushDict
    | HistoryActionLabelCreateDict
    | HistoryActionLabelUpdateDict
    | HistoryActionLabelDeleteDict
    | HistoryActionProjectUpdateDict
    | HistoryActionPullRequestDict
    | HistoryActionStoryCreateDict
    | HistoryActionStoryUpdateDict
    | HistoryActionStoryDeleteDict
    | HistoryActionStoryCommentCreateDict
    | HistoryActionStoryLinkCreateDict
    | HistoryActionStoryLinkUpdateDict
    | HistoryActionStoryLinkDeleteDict
    | HistoryActionTaskCreateDict
    | HistoryActionTaskUpdateDict
    | HistoryActionTaskDeleteDict
    | HistoryActionWorkspace2BulkUpdateDict
)
