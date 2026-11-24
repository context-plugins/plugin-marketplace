from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_label_params import CreateLabelParams, CreateLabelParamsDict
from .custom_field_value_params import CustomFieldValueParams, CustomFieldValueParamsDict
from .enums.move_to import MoveToOrStr
from .enums.story_type import StoryTypeOrStr
from .link_sub_task_params import LinkSubTaskParams, LinkSubTaskParamsDict


class UpdateStory(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the story."""

    archived: Optional[bool] = UNSET
    """True if the story is archived, otherwise false."""

    labels: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels attached to the story."""

    pull_request_ids: Optional[list[int]] = UNSET
    """An array of IDs of Pull/Merge Requests attached to the story."""

    story_type: Optional[StoryTypeOrStr] = UNSET
    """The type of story (feature, bug, chore)."""

    custom_fields: Optional[list[CustomFieldValueParams]] = UNSET
    """A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a
    CustomField."""

    move_to: Optional[MoveToOrStr] = UNSET
    """One of "first" or "last". This can be used to move the given story to the first or last position in the workflow
    state."""

    file_ids: Optional[list[int]] = UNSET
    """An array of IDs of files attached to the story."""

    completed_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Story was completed."""

    name: Optional[str] = UNSET
    """The title of the story."""

    epic_id: OptionalNullable[int] = UNSET
    """The ID of the epic the story belongs to."""

    external_links: Optional[list[str]] = UNSET
    """An array of External Links associated with this story."""

    branch_ids: Optional[list[int]] = UNSET
    """An array of IDs of Branches attached to the story."""

    commit_ids: Optional[list[int]] = UNSET
    """An array of IDs of Commits attached to the story."""

    sub_tasks: Optional[list[LinkSubTaskParams]] = UNSET
    """An array of story IDs to attach to this story as sub-tasks. This list represents the final state of the parent's
    sub-tasks - missing stories will be unlinked, new stories will be linked, and the input order reflects sub-task
    positions."""

    requested_by_id: Optional[UUID] = UNSET
    """The ID of the member that requested the story."""

    iteration_id: OptionalNullable[int] = UNSET
    """The ID of the iteration the story belongs to."""

    started_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Story was started."""

    group_id: OptionalNullable[UUID] = UNSET
    """The ID of the group to associate with this story"""

    workflow_state_id: Optional[int] = UNSET
    """The ID of the workflow state to put the story in."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the followers of this story."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    parent_story_id: OptionalNullable[int] = UNSET
    """The parent story id. If you want to unset this value set parent_story_id to null."""

    before_id: Optional[int] = UNSET
    """The ID of the story we want to move this story before."""

    estimate: OptionalNullable[int] = UNSET
    """The numeric point estimate of the story. Can also be null, which means unestimated."""

    after_id: Optional[int] = UNSET
    """The ID of the story we want to move this story after."""

    project_id: OptionalNullable[int] = UNSET
    """The ID of the project the story belongs to."""

    linked_file_ids: Optional[list[int]] = UNSET
    """An array of IDs of linked files attached to the story."""

    deadline: OptionalNullable[RFC3339DateTime] = UNSET
    """The due date of the story."""


class UpdateStoryDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    labels: NotRequired[list[CreateLabelParamsDict]]
    pull_request_ids: NotRequired[list[int]]
    story_type: NotRequired[StoryTypeOrStr]
    custom_fields: NotRequired[list[CustomFieldValueParamsDict]]
    move_to: NotRequired[MoveToOrStr]
    file_ids: NotRequired[list[int]]
    completed_at_override: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str]
    epic_id: NotRequired[int | None]
    external_links: NotRequired[list[str]]
    branch_ids: NotRequired[list[int]]
    commit_ids: NotRequired[list[int]]
    sub_tasks: NotRequired[list[LinkSubTaskParamsDict]]
    requested_by_id: NotRequired[UUID]
    iteration_id: NotRequired[int | None]
    started_at_override: NotRequired[RFC3339DateTime | None]
    group_id: NotRequired[UUID | None]
    workflow_state_id: NotRequired[int]
    follower_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    parent_story_id: NotRequired[int | None]
    before_id: NotRequired[int]
    estimate: NotRequired[int | None]
    after_id: NotRequired[int]
    project_id: NotRequired[int | None]
    linked_file_ids: NotRequired[list[int]]
    deadline: NotRequired[RFC3339DateTime | None]
