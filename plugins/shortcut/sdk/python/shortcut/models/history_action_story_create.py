from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.story_type1 import StoryType1OrStr


class HistoryActionStoryCreate(SdkBaseModel):
    """An action representing a Story being created."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The application URL of the Story."""

    description: Optional[str] = UNSET
    """The description of the Story."""

    started: Optional[bool] = UNSET
    """Whether or not the Story has been started."""

    entity_type: str
    """The type of entity referenced."""

    task_ids: Optional[list[int]] = UNSET
    """An array of Task IDs on this Story."""

    story_type: StoryType1OrStr
    """The type of Story; either feature, bug, or chore."""

    name: str
    """The name of the Story."""

    completed: Optional[bool] = UNSET
    """Whether or not the Story is completed."""

    blocker: Optional[bool] = UNSET
    """Whether or not the Story is blocking another Story."""

    epic_id: Optional[int] = UNSET
    """The Epic ID for this Story."""

    requested_by_id: Optional[UUID] = UNSET
    """The ID of the Member that requested the Story."""

    iteration_id: OptionalNullable[int] = UNSET
    """The Iteration ID the Story is in."""

    label_ids: Optional[list[int]] = UNSET
    """An array of Labels IDs attached to the Story."""

    group_id: Optional[UUID] = UNSET
    """The Team IDs for the followers of the Story."""

    workflow_state_id: Optional[int] = UNSET
    """An array of Workflow State IDs attached to the Story."""

    object_story_link_ids: Optional[list[int]] = UNSET
    """An array of Story IDs that are the object of a Story Link relationship."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of Member IDs for the followers of the Story."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of Member IDs that are the owners of the Story."""

    custom_field_value_ids: Optional[list[UUID]] = UNSET
    """An array of Custom Field Enum Value ids on this Story."""

    id: int
    """The ID of the entity referenced."""

    parent_story_id: Optional[int] = UNSET
    """The Story's Parent ID (only applicable if Story is a Sub-task)"""

    estimate: Optional[int] = UNSET
    """The estimate (or point value) for the Story."""

    subject_story_link_ids: Optional[list[int]] = UNSET
    """An array of Story IDs that are the subject of a Story Link relationship."""

    action: Literal["create"] = "create"
    """The action of the entity referenced."""

    blocked: Optional[bool] = UNSET
    """Whether or not the Story is blocked by another Story."""

    project_id: Optional[int] = UNSET
    """The Project ID of the Story is in."""

    deadline: Optional[str] = UNSET
    """The timestamp representing the Story's deadline."""


class HistoryActionStoryCreateDict(TypedDict):
    app_url: str
    description: NotRequired[str]
    started: NotRequired[bool]
    entity_type: str
    task_ids: NotRequired[list[int]]
    story_type: StoryType1OrStr
    name: str
    completed: NotRequired[bool]
    blocker: NotRequired[bool]
    epic_id: NotRequired[int]
    requested_by_id: NotRequired[UUID]
    iteration_id: NotRequired[int | None]
    label_ids: NotRequired[list[int]]
    group_id: NotRequired[UUID]
    workflow_state_id: NotRequired[int]
    object_story_link_ids: NotRequired[list[int]]
    follower_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    custom_field_value_ids: NotRequired[list[UUID]]
    id: int
    parent_story_id: NotRequired[int]
    estimate: NotRequired[int]
    subject_story_link_ids: NotRequired[list[int]]
    action: Literal["create"]
    blocked: NotRequired[bool]
    project_id: NotRequired[int]
    deadline: NotRequired[str]
