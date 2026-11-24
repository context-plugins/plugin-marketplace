from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .create_sub_task_params import CreateSubTaskParams, CreateSubTaskParamsDict
from .custom_field_value_params import CustomFieldValueParams, CustomFieldValueParamsDict
from .label_slim import LabelSlim, LabelSlimDict
from .linked_file import LinkedFile, LinkedFileDict
from .story_contents_task import StoryContentsTask, StoryContentsTaskDict
from .uploaded_file import UploadedFile, UploadedFileDict


class StoryContents(SdkBaseModel):
    """A container entity for the attributes this template should populate."""

    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the story."""

    entity_type: Optional[str] = UNSET
    """A string description of this resource."""

    labels: Optional[list[LabelSlim]] = UNSET
    """An array of labels attached to the story."""

    story_type: Optional[str] = UNSET
    """The type of story (feature, bug, chore)."""

    custom_fields: Optional[list[CustomFieldValueParams]] = UNSET
    """An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some
    value for a CustomField."""

    linked_files: Optional[list[LinkedFile]] = UNSET
    """An array of linked files attached to the story."""

    name: Optional[str] = UNSET
    """The name of the story."""

    epic_id: Optional[int] = UNSET
    """The ID of the epic the story belongs to."""

    external_links: Optional[list[str]] = UNSET
    """An array of external links connected to the story."""

    sub_tasks: Optional[list[CreateSubTaskParams]] = UNSET
    """An array of maps specifying the sub-tasks to create and link to the story. Field only applicable when Sub-task
    feature is enabled."""

    iteration_id: Optional[int] = UNSET
    """The ID of the iteration the story belongs to."""

    tasks: Optional[list[StoryContentsTask]] = UNSET
    """An array of tasks connected to the story."""

    label_ids: Optional[list[int]] = UNSET
    """An array of label ids attached to the story."""

    group_id: Optional[UUID] = UNSET
    """The ID of the group to which the story is assigned."""

    workflow_state_id: Optional[int] = UNSET
    """The ID of the workflow state the story is currently in."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Members listed as Followers."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    estimate: Optional[int] = UNSET
    """The numeric point estimate of the story. Can also be null, which means unestimated."""

    files: Optional[list[UploadedFile]] = UNSET
    """An array of files attached to the story."""

    project_id: Optional[int] = UNSET
    """The ID of the project the story belongs to."""

    deadline: Optional[RFC3339DateTime] = UNSET
    """The due date of the story."""


class StoryContentsDict(TypedDict):
    description: NotRequired[str]
    entity_type: NotRequired[str]
    labels: NotRequired[list[LabelSlimDict]]
    story_type: NotRequired[str]
    custom_fields: NotRequired[list[CustomFieldValueParamsDict]]
    linked_files: NotRequired[list[LinkedFileDict]]
    name: NotRequired[str]
    epic_id: NotRequired[int]
    external_links: NotRequired[list[str]]
    sub_tasks: NotRequired[list[CreateSubTaskParamsDict]]
    iteration_id: NotRequired[int]
    tasks: NotRequired[list[StoryContentsTaskDict]]
    label_ids: NotRequired[list[int]]
    group_id: NotRequired[UUID]
    workflow_state_id: NotRequired[int]
    follower_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    estimate: NotRequired[int]
    files: NotRequired[list[UploadedFileDict]]
    project_id: NotRequired[int]
    deadline: NotRequired[RFC3339DateTime]
