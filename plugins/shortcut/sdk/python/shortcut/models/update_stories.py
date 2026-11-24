from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_label_params import CreateLabelParams, CreateLabelParamsDict
from .custom_field_value_params import CustomFieldValueParams, CustomFieldValueParamsDict
from .enums.move_to import MoveToOrStr
from .enums.story_type import StoryTypeOrStr


class UpdateStories(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    archived: Optional[bool] = UNSET
    """If the Stories should be archived or not."""

    story_ids: list[int]
    """The Ids of the Stories you wish to update."""

    story_type: Optional[StoryTypeOrStr] = UNSET
    """The type of story (feature, bug, chore)."""

    move_to: Optional[MoveToOrStr] = UNSET
    """One of "first" or "last". This can be used to move the given story to the first or last position in the workflow
    state."""

    follower_ids_add: Optional[list[UUID]] = UNSET
    """The UUIDs of the new followers to be added."""

    epic_id: OptionalNullable[int] = UNSET
    """The ID of the epic the story belongs to."""

    external_links: Optional[list[str]] = UNSET
    """An array of External Links associated with this story."""

    follower_ids_remove: Optional[list[UUID]] = UNSET
    """The UUIDs of the followers to be removed."""

    requested_by_id: Optional[UUID] = UNSET
    """The ID of the member that requested the story."""

    iteration_id: OptionalNullable[int] = UNSET
    """The ID of the iteration the story belongs to."""

    custom_fields_remove: Optional[list[CustomFieldValueParams]] = UNSET
    """A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a
    CustomField."""

    labels_add: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels to be added."""

    group_id: OptionalNullable[UUID] = UNSET
    """The Id of the Group the Stories should belong to."""

    workflow_state_id: Optional[int] = UNSET
    """The ID of the workflow state to put the stories in."""

    before_id: Optional[int] = UNSET
    """The ID of the story that the stories are to be moved before."""

    estimate: OptionalNullable[int] = UNSET
    """The numeric point estimate of the story. Can also be null, which means unestimated."""

    after_id: Optional[int] = UNSET
    """The ID of the story that the stories are to be moved below."""

    owner_ids_remove: Optional[list[UUID]] = UNSET
    """The UUIDs of the owners to be removed."""

    custom_fields_add: Optional[list[CustomFieldValueParams]] = UNSET
    """A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a
    CustomField."""

    project_id: OptionalNullable[int] = UNSET
    """The ID of the Project the Stories should belong to."""

    labels_remove: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels to be removed."""

    deadline: OptionalNullable[RFC3339DateTime] = UNSET
    """The due date of the story."""

    owner_ids_add: Optional[list[UUID]] = UNSET
    """The UUIDs of the new owners to be added."""


class UpdateStoriesDict(TypedDict):
    archived: NotRequired[bool]
    story_ids: list[int]
    story_type: NotRequired[StoryTypeOrStr]
    move_to: NotRequired[MoveToOrStr]
    follower_ids_add: NotRequired[list[UUID]]
    epic_id: NotRequired[int | None]
    external_links: NotRequired[list[str]]
    follower_ids_remove: NotRequired[list[UUID]]
    requested_by_id: NotRequired[UUID]
    iteration_id: NotRequired[int | None]
    custom_fields_remove: NotRequired[list[CustomFieldValueParamsDict]]
    labels_add: NotRequired[list[CreateLabelParamsDict]]
    group_id: NotRequired[UUID | None]
    workflow_state_id: NotRequired[int]
    before_id: NotRequired[int]
    estimate: NotRequired[int | None]
    after_id: NotRequired[int]
    owner_ids_remove: NotRequired[list[UUID]]
    custom_fields_add: NotRequired[list[CustomFieldValueParamsDict]]
    project_id: NotRequired[int | None]
    labels_remove: NotRequired[list[CreateLabelParamsDict]]
    deadline: NotRequired[RFC3339DateTime | None]
    owner_ids_add: NotRequired[list[UUID]]
