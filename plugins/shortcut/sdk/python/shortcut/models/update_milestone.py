from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_category_params import CreateCategoryParams, CreateCategoryParamsDict
from .enums.state_shortcut_milestones_api import StateShortcutMilestonesApiOrStr


class UpdateMilestone(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Milestone's description."""

    archived: Optional[bool] = UNSET
    """A boolean indicating whether the Milestone is archived or not"""

    completed_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Milestone was completed."""

    name: Optional[str] = UNSET
    """The name of the Milestone."""

    state: Optional[StateShortcutMilestonesApiOrStr] = UNSET
    """The workflow state that the Milestone is in."""

    started_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Milestone was started."""

    categories: Optional[list[CreateCategoryParams]] = UNSET
    """An array of IDs of Categories attached to the Milestone."""

    before_id: Optional[int] = UNSET
    """The ID of the Milestone we want to move this Milestone before."""

    after_id: Optional[int] = UNSET
    """The ID of the Milestone we want to move this Milestone after."""


class UpdateMilestoneDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    completed_at_override: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str]
    state: NotRequired[StateShortcutMilestonesApiOrStr]
    started_at_override: NotRequired[RFC3339DateTime | None]
    categories: NotRequired[list[CreateCategoryParamsDict]]
    before_id: NotRequired[int]
    after_id: NotRequired[int]
