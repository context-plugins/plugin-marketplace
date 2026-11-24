from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .category import Category, CategoryDict
from .objective_stats import ObjectiveStats, ObjectiveStatsDict


class Objective(SdkBaseModel):
    """An Objective is a collection of Epics that represent a release or some other large initiative that you are
    working on."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Objective."""

    description: str
    """The Objective's description."""

    archived: bool
    """A boolean indicating whether the Objective has been archived or not."""

    started: bool
    """A true/false boolean indicating if the Objective has been started."""

    entity_type: str
    """A string description of this resource."""

    completed_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Objective was completed."""

    started_at: RFC3339DateTime | None
    """The time/date the Objective was started."""

    completed_at: RFC3339DateTime | None
    """The time/date the Objective was completed."""

    name: str
    """The name of the Objective."""

    global_id: str
    completed: bool
    """A true/false boolean indicating if the Objectivehas been completed."""

    state: str
    """The workflow state that the Objective is in."""

    started_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Objective was started."""

    updated_at: RFC3339DateTime
    """The time/date the Objective was updated."""

    categories: list[Category]
    """An array of Categories attached to the Objective."""

    id: int
    """The unique ID of the Objective."""

    key_result_ids: list[UUID]
    """The IDs of the Key Results associated with the Objective."""

    position: int
    """A number representing the position of the Objective in relation to every other Objective within the Workspace."""

    stats: ObjectiveStats
    """A group of calculated values for this Objective."""

    created_at: RFC3339DateTime
    """The time/date the Objective was created."""


class ObjectiveDict(TypedDict):
    app_url: str
    description: str
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
    stats: ObjectiveStatsDict
    created_at: RFC3339DateTime
