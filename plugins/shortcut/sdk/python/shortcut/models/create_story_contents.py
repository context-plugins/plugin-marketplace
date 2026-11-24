from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .base_task_params import BaseTaskParams, BaseTaskParamsDict
from .create_label_params import CreateLabelParams, CreateLabelParamsDict
from .create_sub_task_params import CreateSubTaskParams, CreateSubTaskParamsDict
from .custom_field_value_params import CustomFieldValueParams, CustomFieldValueParamsDict


class CreateStoryContents(SdkBaseModel):
    """A map of story attributes this template populates."""

    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the story."""

    labels: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels to be populated by the template."""

    story_type: Optional[str] = UNSET
    """The type of story (feature, bug, chore)."""

    custom_fields: Optional[list[CustomFieldValueParams]] = UNSET
    """An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some
    value for a CustomField."""

    file_ids: Optional[list[int]] = UNSET
    """An array of the attached file IDs to be populated."""

    name: Optional[str] = UNSET
    """The name of the story."""

    epic_id: OptionalNullable[int] = UNSET
    """The ID of the epic the to be populated."""

    external_links: Optional[list[str]] = UNSET
    """An array of external links to be populated."""

    sub_tasks: Optional[list[CreateSubTaskParams]] = UNSET
    """An array of maps specifying the sub-tasks to create and link to the story. Field only applicable when Sub-task
    feature is enabled."""

    iteration_id: OptionalNullable[int] = UNSET
    """The ID of the iteration the to be populated."""

    tasks: Optional[list[BaseTaskParams]] = UNSET
    """An array of tasks to be populated by the template."""

    group_id: OptionalNullable[UUID] = UNSET
    """The ID of the group to be populated."""

    workflow_state_id: OptionalNullable[int] = UNSET
    """The ID of the workflow state to be populated."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Members listed as Followers."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    estimate: OptionalNullable[int] = UNSET
    """The numeric point estimate to be populated."""

    project_id: Optional[int] = UNSET
    """The ID of the project the story belongs to."""

    linked_file_ids: Optional[list[int]] = UNSET
    """An array of the linked file IDs to be populated."""

    deadline: OptionalNullable[RFC3339DateTime] = UNSET
    """The due date of the story."""


class CreateStoryContentsDict(TypedDict):
    description: NotRequired[str]
    labels: NotRequired[list[CreateLabelParamsDict]]
    story_type: NotRequired[str]
    custom_fields: NotRequired[list[CustomFieldValueParamsDict]]
    file_ids: NotRequired[list[int]]
    name: NotRequired[str]
    epic_id: NotRequired[int | None]
    external_links: NotRequired[list[str]]
    sub_tasks: NotRequired[list[CreateSubTaskParamsDict]]
    iteration_id: NotRequired[int | None]
    tasks: NotRequired[list[BaseTaskParamsDict]]
    group_id: NotRequired[UUID | None]
    workflow_state_id: NotRequired[int | None]
    follower_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    estimate: NotRequired[int | None]
    project_id: NotRequired[int]
    linked_file_ids: NotRequired[list[int]]
    deadline: NotRequired[RFC3339DateTime | None]
