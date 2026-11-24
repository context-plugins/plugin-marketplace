from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.story_type6 import StoryType6OrStr
from .enums.workflow_state_type import WorkflowStateTypeOrStr


class SearchStories(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    archived: Optional[bool] = UNSET
    """A true/false boolean indicating whether the Story is in archived state."""

    owner_id: OptionalNullable[UUID] = UNSET
    """An array of UUIDs for any Users who may be Owners of the Stories."""

    story_type: Optional[StoryType6OrStr] = UNSET
    """The type of Stories that you want returned."""

    epic_ids: Optional[list[int]] = UNSET
    """The Epic IDs that may be associated with the Stories."""

    project_ids: Optional[list[int | None]] = UNSET
    """The IDs for the Projects the Stories may be assigned to."""

    updated_at_end: Optional[RFC3339DateTime] = UNSET
    """Stories should have been updated on or before this date."""

    completed_at_end: Optional[RFC3339DateTime] = UNSET
    """Stories should have been completed on or before this date."""

    workflow_state_types: Optional[list[WorkflowStateTypeOrStr]] = UNSET
    """The type of Workflow State the Stories may be in."""

    deadline_end: Optional[RFC3339DateTime] = UNSET
    """Stories should have a deadline on or before this date."""

    created_at_start: Optional[RFC3339DateTime] = UNSET
    """Stories should have been created on or after this date."""

    epic_id: OptionalNullable[int] = UNSET
    """The Epic IDs that may be associated with the Stories."""

    label_name: Optional[str] = UNSET
    """The name of any associated Labels."""

    requested_by_id: Optional[UUID] = UNSET
    """The UUID of any Users who may have requested the Stories."""

    iteration_id: OptionalNullable[int] = UNSET
    """The Iteration ID that may be associated with the Stories."""

    label_ids: Optional[list[int]] = UNSET
    """The Label IDs that may be associated with the Stories."""

    group_id: OptionalNullable[UUID] = UNSET
    """The Group ID that is associated with the Stories"""

    workflow_state_id: Optional[int] = UNSET
    """The unique IDs of the specific Workflow States that the Stories should be in."""

    iteration_ids: Optional[list[int]] = UNSET
    """The Iteration IDs that may be associated with the Stories."""

    created_at_end: Optional[RFC3339DateTime] = UNSET
    """Stories should have been created on or before this date."""

    deadline_start: Optional[RFC3339DateTime] = UNSET
    """Stories should have a deadline on or after this date."""

    group_ids: Optional[list[UUID]] = UNSET
    """The Group IDs that are associated with the Stories"""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Users who may be Owners of the Stories."""

    external_id: Optional[str] = UNSET
    """An ID or URL that references an external resource. Useful during imports."""

    includes_description: Optional[bool] = UNSET
    """Whether to include the story description in the response."""

    estimate: Optional[int] = UNSET
    """The number of estimate points associate with the Stories."""

    project_id: OptionalNullable[int] = UNSET
    """The IDs for the Projects the Stories may be assigned to."""

    completed_at_start: Optional[RFC3339DateTime] = UNSET
    """Stories should have been completed on or after this date."""

    updated_at_start: Optional[RFC3339DateTime] = UNSET
    """Stories should have been updated on or after this date."""


class SearchStoriesDict(TypedDict):
    archived: NotRequired[bool]
    owner_id: NotRequired[UUID | None]
    story_type: NotRequired[StoryType6OrStr]
    epic_ids: NotRequired[list[int]]
    project_ids: NotRequired[list[int | None]]
    updated_at_end: NotRequired[RFC3339DateTime]
    completed_at_end: NotRequired[RFC3339DateTime]
    workflow_state_types: NotRequired[list[WorkflowStateTypeOrStr]]
    deadline_end: NotRequired[RFC3339DateTime]
    created_at_start: NotRequired[RFC3339DateTime]
    epic_id: NotRequired[int | None]
    label_name: NotRequired[str]
    requested_by_id: NotRequired[UUID]
    iteration_id: NotRequired[int | None]
    label_ids: NotRequired[list[int]]
    group_id: NotRequired[UUID | None]
    workflow_state_id: NotRequired[int]
    iteration_ids: NotRequired[list[int]]
    created_at_end: NotRequired[RFC3339DateTime]
    deadline_start: NotRequired[RFC3339DateTime]
    group_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
    includes_description: NotRequired[bool]
    estimate: NotRequired[int]
    project_id: NotRequired[int | None]
    completed_at_start: NotRequired[RFC3339DateTime]
    updated_at_start: NotRequired[RFC3339DateTime]
