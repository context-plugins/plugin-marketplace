from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .project_stats import ProjectStats, ProjectStatsDict


class Project(SdkBaseModel):
    """Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended
    product, component, or initiative."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Project."""

    description: str | None
    """The description of the Project."""

    archived: bool
    """True/false boolean indicating whether the Project is in an Archived state."""

    entity_type: str
    """A string description of this resource."""

    days_to_thermometer: int
    """The number of days before the thermometer appears in the Story summary."""

    color: str | None
    """The color associated with the Project in the Shortcut member interface."""

    workflow_id: int
    """The ID of the workflow the project belongs to."""

    name: str
    """The name of the Project"""

    global_id: str
    """The Global ID of the Project."""

    start_time: RFC3339DateTime
    """The date at which the Project was started."""

    updated_at: RFC3339DateTime | None
    """The time/date that the Project was last updated."""

    follower_ids: list[UUID]
    """An array of UUIDs for any Members listed as Followers."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Project has been imported from another tool, the
    ID in the other tool can be indicated here."""

    id: int
    """The unique ID of the Project."""

    show_thermometer: bool
    """Configuration to enable or disable thermometers in the Story summary."""

    team_id: int
    """The ID of the team the project belongs to."""

    iteration_length: int
    """The number of weeks per iteration in this Project."""

    abbreviation: str | None
    """The Project abbreviation used in Story summaries. Should be kept to 3 characters at most."""

    stats: ProjectStats
    """A group of calculated values for this Project."""

    created_at: RFC3339DateTime | None
    """The time/date that the Project was created."""


class ProjectDict(TypedDict):
    app_url: str
    description: str | None
    archived: bool
    entity_type: str
    days_to_thermometer: int
    color: str | None
    workflow_id: int
    name: str
    global_id: str
    start_time: RFC3339DateTime
    updated_at: RFC3339DateTime | None
    follower_ids: list[UUID]
    external_id: str | None
    id: int
    show_thermometer: bool
    team_id: int
    iteration_length: int
    abbreviation: str | None
    stats: ProjectStatsDict
    created_at: RFC3339DateTime | None
