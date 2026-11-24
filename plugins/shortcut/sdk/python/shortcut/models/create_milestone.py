from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .create_category_params import CreateCategoryParams, CreateCategoryParamsDict
from .enums.state_shortcut_milestones_api import StateShortcutMilestonesApiOrStr


class CreateMilestone(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the Milestone."""

    description: Optional[str] = UNSET
    """The Milestone's description."""

    state: Optional[StateShortcutMilestonesApiOrStr] = UNSET
    """The workflow state that the Milestone is in."""

    started_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Milestone was started."""

    completed_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Milestone was completed."""

    categories: Optional[list[CreateCategoryParams]] = UNSET
    """An array of IDs of Categories attached to the Milestone."""


class CreateMilestoneDict(TypedDict):
    name: str
    description: NotRequired[str]
    state: NotRequired[StateShortcutMilestonesApiOrStr]
    started_at_override: NotRequired[RFC3339DateTime]
    completed_at_override: NotRequired[RFC3339DateTime]
    categories: NotRequired[list[CreateCategoryParamsDict]]
