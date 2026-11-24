from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .branch import Branch, BranchDict
from .commit import Commit, CommitDict
from .label_slim import LabelSlim, LabelSlimDict
from .linked_file import LinkedFile, LinkedFileDict
from .pull_request import PullRequest, PullRequestDict
from .story_comment import StoryComment, StoryCommentDict
from .story_custom_field import StoryCustomField, StoryCustomFieldDict
from .story_stats import StoryStats, StoryStatsDict
from .synced_item import SyncedItem, SyncedItemDict
from .task import Task, TaskDict
from .typed_story_link import TypedStoryLink, TypedStoryLinkDict
from .uploaded_file import UploadedFile, UploadedFileDict


class Story(SdkBaseModel):
    """Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Story."""

    description: str
    """The description of the story."""

    archived: bool
    """True if the story has been archived or not."""

    started: bool
    """A true/false boolean indicating if the Story has been started."""

    story_links: list[TypedStoryLink]
    """An array of story links attached to the Story."""

    entity_type: str
    """A string description of this resource."""

    labels: list[LabelSlim]
    """An array of labels attached to the story."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    synced_item: Optional[SyncedItem] = UNSET
    """The synced item for the story."""

    member_mention_ids: list[UUID]
    """An array of Member IDs that have been mentioned in the Story description."""

    story_type: str
    """The type of story (feature, bug, chore)."""

    custom_fields: Optional[list[StoryCustomField]] = UNSET
    """An array of CustomField value assertions for the story."""

    linked_files: list[LinkedFile]
    """An array of linked files attached to the story."""

    workflow_id: int
    """The ID of the workflow the story belongs to."""

    completed_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Story was completed."""

    started_at: RFC3339DateTime | None
    """The time/date the Story was started."""

    completed_at: RFC3339DateTime | None
    """The time/date the Story was completed."""

    name: str
    """The name of the story."""

    global_id: str
    completed: bool
    """A true/false boolean indicating if the Story has been completed."""

    comments: list[StoryComment]
    """An array of comments attached to the story."""

    blocker: bool
    """A true/false boolean indicating if the Story is currently a blocker of another story."""

    branches: list[Branch]
    """An array of Git branches attached to the story."""

    epic_id: int | None
    """The ID of the epic the story belongs to."""

    story_template_id: UUID | None
    """The ID of the story template used to create this story, or null if not created using a template."""

    external_links: list[str]
    """An array of external links (strings) associated with a Story"""

    previous_iteration_ids: list[int]
    """The IDs of the iteration the story belongs to."""

    requested_by_id: UUID
    """The ID of the Member that requested the story."""

    iteration_id: int | None
    """The ID of the iteration the story belongs to."""

    sub_task_story_ids: Optional[list[int]] = UNSET
    """The Story IDs of Sub-tasks attached to the Story Field only applicable when Sub-task feature is enabled."""

    tasks: list[Task]
    """An array of tasks connected to the story."""

    formatted_vcs_branch_name: OptionalNullable[str] = UNSET
    """The formatted branch name for this story."""

    label_ids: list[int]
    """An array of label ids attached to the story."""

    started_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Story was started."""

    group_id: UUID | None
    """The ID of the group associated with the story."""

    workflow_state_id: int
    """The ID of the workflow state the story is currently in."""

    updated_at: RFC3339DateTime | None
    """The time/date the Story was updated."""

    pull_requests: list[PullRequest]
    """An array of Pull/Merge Requests attached to the story."""

    group_mention_ids: list[UUID]
    """An array of Group IDs that have been mentioned in the Story description."""

    follower_ids: list[UUID]
    """An array of UUIDs for any Members listed as Followers."""

    owner_ids: list[UUID]
    """An array of UUIDs of the owners of this story."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Story has been imported from another tool, the
    ID in the other tool can be indicated here."""

    id: int
    """The unique ID of the Story."""

    lead_time: Optional[int] = UNSET
    """The lead time (in seconds) of this story when complete."""

    parent_story_id: OptionalNullable[int] = UNSET
    """The ID of the parent story to this story (making this story a sub-task). Field only applicable when Sub-task
    feature is enabled."""

    estimate: int | None
    """The numeric point estimate of the story. Can also be null, which means unestimated."""

    commits: list[Commit]
    """An array of commits attached to the story."""

    files: list[UploadedFile]
    """An array of files attached to the story."""

    position: int
    """A number representing the position of the story in relation to every other story in the current project."""

    blocked: bool
    """A true/false boolean indicating if the Story is currently blocked."""

    project_id: int | None
    """The ID of the project the story belongs to."""

    deadline: RFC3339DateTime | None
    """The due date of the story."""

    stats: StoryStats
    """The stats object for Stories"""

    cycle_time: Optional[int] = UNSET
    """The cycle time (in seconds) of this story when complete."""

    created_at: RFC3339DateTime
    """The time/date the Story was created."""

    moved_at: RFC3339DateTime | None
    """The time/date the Story was last changed workflow-state."""


class StoryDict(TypedDict):
    app_url: str
    description: str
    archived: bool
    started: bool
    story_links: list[TypedStoryLinkDict]
    entity_type: str
    labels: list[LabelSlimDict]
    mention_ids: list[UUID]
    synced_item: NotRequired[SyncedItemDict]
    member_mention_ids: list[UUID]
    story_type: str
    custom_fields: NotRequired[list[StoryCustomFieldDict]]
    linked_files: list[LinkedFileDict]
    workflow_id: int
    completed_at_override: RFC3339DateTime | None
    started_at: RFC3339DateTime | None
    completed_at: RFC3339DateTime | None
    name: str
    global_id: str
    completed: bool
    comments: list[StoryCommentDict]
    blocker: bool
    branches: list[BranchDict]
    epic_id: int | None
    story_template_id: UUID | None
    external_links: list[str]
    previous_iteration_ids: list[int]
    requested_by_id: UUID
    iteration_id: int | None
    sub_task_story_ids: NotRequired[list[int]]
    tasks: list[TaskDict]
    formatted_vcs_branch_name: NotRequired[str | None]
    label_ids: list[int]
    started_at_override: RFC3339DateTime | None
    group_id: UUID | None
    workflow_state_id: int
    updated_at: RFC3339DateTime | None
    pull_requests: list[PullRequestDict]
    group_mention_ids: list[UUID]
    follower_ids: list[UUID]
    owner_ids: list[UUID]
    external_id: str | None
    id: int
    lead_time: NotRequired[int]
    parent_story_id: NotRequired[int | None]
    estimate: int | None
    commits: list[CommitDict]
    files: list[UploadedFileDict]
    position: int
    blocked: bool
    project_id: int | None
    deadline: RFC3339DateTime | None
    stats: StoryStatsDict
    cycle_time: NotRequired[int]
    created_at: RFC3339DateTime
    moved_at: RFC3339DateTime | None
