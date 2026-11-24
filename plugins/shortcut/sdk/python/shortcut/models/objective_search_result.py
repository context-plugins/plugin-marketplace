from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .category import Category, CategoryDict
from .milestone_stats import MilestoneStats, MilestoneStatsDict


class ObjectiveSearchResult(SdkBaseModel):
    """A Milestone in search results. This is typed differently from Milestone because the details=slim search argument
    will omit some fields."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Milestone."""

    description: Optional[str] = UNSET
    """The Milestone's description."""

    archived: bool
    """A boolean indicating whether the Milestone has been archived or not."""

    started: bool
    """A true/false boolean indicating if the Milestone has been started."""

    entity_type: str
    """A string description of this resource."""

    completed_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Milestone was completed."""

    started_at: RFC3339DateTime | None
    """The time/date the Milestone was started."""

    completed_at: RFC3339DateTime | None
    """The time/date the Milestone was completed."""

    name: str
    """The name of the Milestone."""

    global_id: str
    completed: bool
    """A true/false boolean indicating if the Milestone has been completed."""

    state: str
    """The workflow state that the Milestone is in."""

    started_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Milestone was started."""

    updated_at: RFC3339DateTime
    """The time/date the Milestone was updated."""

    categories: list[Category]
    """An array of Categories attached to the Milestone."""

    id: int
    """The unique ID of the Milestone."""

    key_result_ids: list[UUID]
    """The IDs of the Key Results associated with the Objective."""

    position: int
    """A number representing the position of the Milestone in relation to every other Milestone within the Workspace."""

    stats: MilestoneStats
    """A group of calculated values for this Milestone."""

    created_at: RFC3339DateTime
    """The time/date the Milestone was created."""


class ObjectiveSearchResultDict(TypedDict):
    app_url: str
    description: NotRequired[str]
    archived: bool
    started: bool
    entity_type: str
    completed_at_override: RFC3339DateTime | None
    started_at: RFC3339DateTime | None
    completed_at: RFC3339DateTime | None
    name: str
    global_id: str
    completed: bool
    state: str
    started_at_override: RFC3339DateTime | None
    updated_at: RFC3339DateTime
    categories: list[CategoryDict]
    id: int
    key_result_ids: list[UUID]
    position: int
    stats: MilestoneStatsDict
    created_at: RFC3339DateTime
