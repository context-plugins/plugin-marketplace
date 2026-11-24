from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_label_params import CreateLabelParams, CreateLabelParamsDict
from .create_story_comment_params import CreateStoryCommentParams, CreateStoryCommentParamsDict
from .create_story_link_params import CreateStoryLinkParams, CreateStoryLinkParamsDict
from .create_task_params import CreateTaskParams, CreateTaskParamsDict
from .custom_field_value_params import CustomFieldValueParams, CustomFieldValueParamsDict
from .enums.move_to import MoveToOrStr
from .enums.story_type import StoryTypeOrStr
from .remove_custom_field_params import RemoveCustomFieldParams, RemoveCustomFieldParamsDict
from .remove_label_params import RemoveLabelParams, RemoveLabelParamsDict
from .unions.sub_task import SubTask, SubTaskDict


class CreateStoryFromTemplateParams(SdkBaseModel):
    """Request parameters for creating a story from a story template. These parameters are merged with the values
    derived from the template."""

    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the story."""

    archived: Optional[bool] = UNSET
    """Controls the story's archived state."""

    story_links: Optional[list[CreateStoryLinkParams]] = UNSET
    """An array of story links attached to the story."""

    labels: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels attached to the story."""

    external_links_add: Optional[list[str]] = UNSET
    """An array of External Links associated with this story. These will be added to any links provided by the template.
    Cannot be used in conjunction with ``external_links``."""

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

    source_task_id: OptionalNullable[int] = UNSET
    """Given this story was converted from a task in another story, this is the original task ID that was converted to
    this story."""

    completed_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Story was completed."""

    name: Optional[str] = UNSET
    """The name of the story. Must be provided if the template does not provide a name."""

    file_ids_add: Optional[list[int]] = UNSET
    """An array of IDs of files attached to the story in addition to files from the template. Cannot be used in
    conjunction with ``file_ids``."""

    file_ids_remove: Optional[list[int]] = UNSET
    """An array of IDs of files removed from files from the template. Cannot be used in conjunction with
    ``file_ids``."""

    comments: Optional[list[CreateStoryCommentParams]] = UNSET
    """An array of comments to add to the story."""

    follower_ids_add: Optional[list[UUID]] = UNSET
    """The UUIDs of the new followers to be added in addition to followers from the template. Cannot be used in
    conjunction with ``follower_ids.``"""

    epic_id: OptionalNullable[int] = UNSET
    """The ID of the epic the story belongs to."""

    story_template_id: UUID
    """The id of the story template used to create this story."""

    external_links: Optional[list[str]] = UNSET
    """An array of External Links associated with this story."""

    follower_ids_remove: Optional[list[UUID]] = UNSET
    """The UUIDs of the new followers to be removed from followers from the template. Cannot be used in conjunction with
    ``follower_ids``."""

    sub_tasks: Optional[list[SubTask]] = UNSET
    """An array of maps specifying sub-tasks to be associated with the created story. Each map can either link to an
    existing story or create a new sub-task story to be linked to the created story. Field only applicable when Sub-task
    feature is enabled."""

    linked_file_ids_remove: Optional[list[int]] = UNSET
    """An array of IDs of linked files removed from files from the template. Cannot be used in conjunction with
    ``linked_files.``"""

    requested_by_id: Optional[UUID] = UNSET
    """The ID of the member that requested the story."""

    iteration_id: OptionalNullable[int] = UNSET
    """The ID of the iteration the story belongs to."""

    custom_fields_remove: Optional[list[RemoveCustomFieldParams]] = UNSET
    """A map specifying a CustomField ID. These will be removed from any fields provided by the template. Cannot be used
    in conjunction with ``custom_fields``."""

    tasks: Optional[list[CreateTaskParams]] = UNSET
    """An array of tasks connected to the story."""

    started_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Story was started."""

    labels_add: Optional[list[CreateLabelParams]] = UNSET
    """An array of labels attached to the story in addition to the labels provided by the template. Cannot be used in
    conjunction with ``labels``."""

    group_id: OptionalNullable[UUID] = UNSET
    """The id of the group to associate with this story."""

    workflow_state_id: Optional[int] = UNSET
    """The ID of the workflow state the story will be in."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """The time/date the Story was updated."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the followers of this story."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Story has been imported from another tool, the
    ID in the other tool can be indicated here."""

    parent_story_id: OptionalNullable[int] = UNSET
    """The ID of the parent story to associate with this story (making the created story a sub-task). Field only
    applicable when Sub-task feature is enabled."""

    estimate: OptionalNullable[int] = UNSET
    """The numeric point estimate of the story. Can also be null, which means unestimated."""

    owner_ids_remove: Optional[list[UUID]] = UNSET
    """The UUIDs of the new owners to be removed from owners from the template. Cannot be used in conjunction with
    ``owners``."""

    custom_fields_add: Optional[list[CustomFieldValueParams]] = UNSET
    """A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a
    CustomField. These will be added to any fields provided by the template. Cannot be used in conjunction with
    ``custom_fields``."""

    project_id: OptionalNullable[int] = UNSET
    """The ID of the project the story belongs to."""

    linked_file_ids_add: Optional[list[int]] = UNSET
    """An array of IDs of linked files attached to the story in addition to files from the template. Cannot be used in
    conjunction with ``linked_files``."""

    linked_file_ids: Optional[list[int]] = UNSET
    """An array of IDs of linked files attached to the story."""

    labels_remove: Optional[list[RemoveLabelParams]] = UNSET
    """An array of labels to remove from the labels provided by the template. Cannot be used in conjunction with
    ``labels``."""

    deadline: OptionalNullable[RFC3339DateTime] = UNSET
    """The due date of the story."""

    owner_ids_add: Optional[list[UUID]] = UNSET
    """The UUIDs of the new owners to be added in addition to owners from the template. Cannot be used in conjunction
    with ``owners``."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The time/date the Story was created."""

    external_links_remove: Optional[list[str]] = UNSET
    """An array of External Links associated with this story. These will be removed from any links provided by the
    template. Cannot be used in conjunction with ``external_links``."""


class CreateStoryFromTemplateParamsDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    story_links: NotRequired[list[CreateStoryLinkParamsDict]]
    labels: NotRequired[list[CreateLabelParamsDict]]
    external_links_add: NotRequired[list[str]]
    story_type: NotRequired[StoryTypeOrStr]
    custom_fields: NotRequired[list[CustomFieldValueParamsDict]]
    move_to: NotRequired[MoveToOrStr]
    file_ids: NotRequired[list[int]]
    source_task_id: NotRequired[int | None]
    completed_at_override: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    file_ids_add: NotRequired[list[int]]
    file_ids_remove: NotRequired[list[int]]
    comments: NotRequired[list[CreateStoryCommentParamsDict]]
    follower_ids_add: NotRequired[list[UUID]]
    epic_id: NotRequired[int | None]
    story_template_id: UUID
    external_links: NotRequired[list[str]]
    follower_ids_remove: NotRequired[list[UUID]]
    sub_tasks: NotRequired[list[SubTaskDict]]
    linked_file_ids_remove: NotRequired[list[int]]
    requested_by_id: NotRequired[UUID]
    iteration_id: NotRequired[int | None]
    custom_fields_remove: NotRequired[list[RemoveCustomFieldParamsDict]]
    tasks: NotRequired[list[CreateTaskParamsDict]]
    started_at_override: NotRequired[RFC3339DateTime]
    labels_add: NotRequired[list[CreateLabelParamsDict]]
    group_id: NotRequired[UUID | None]
    workflow_state_id: NotRequired[int]
    updated_at: NotRequired[RFC3339DateTime]
    follower_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
    parent_story_id: NotRequired[int | None]
    estimate: NotRequired[int | None]
    owner_ids_remove: NotRequired[list[UUID]]
    custom_fields_add: NotRequired[list[CustomFieldValueParamsDict]]
    project_id: NotRequired[int | None]
    linked_file_ids_add: NotRequired[list[int]]
    linked_file_ids: NotRequired[list[int]]
    labels_remove: NotRequired[list[RemoveLabelParamsDict]]
    deadline: NotRequired[RFC3339DateTime | None]
    owner_ids_add: NotRequired[list[UUID]]
    created_at: NotRequired[RFC3339DateTime]
    external_links_remove: NotRequired[list[str]]
