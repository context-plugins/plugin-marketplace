from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateProject(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Project's description."""

    archived: Optional[bool] = UNSET
    """A true/false boolean indicating whether the Story is in archived state."""

    days_to_thermometer: Optional[int] = UNSET
    """The number of days before the thermometer appears in the Story summary."""

    color: Optional[str] = UNSET
    """The color that represents the Project in the UI."""

    name: Optional[str] = UNSET
    """The Project's name."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Members you want to add as Followers."""

    show_thermometer: Optional[bool] = UNSET
    """Configuration to enable or disable thermometers in the Story summary."""

    team_id: Optional[int] = UNSET
    """The ID of the team the project belongs to."""

    abbreviation: Optional[str] = UNSET
    """The Project abbreviation used in Story summaries. Should be kept to 3 characters at most."""


class UpdateProjectDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    days_to_thermometer: NotRequired[int]
    color: NotRequired[str]
    name: NotRequired[str]
    follower_ids: NotRequired[list[UUID]]
    show_thermometer: NotRequired[bool]
    team_id: NotRequired[int]
    abbreviation: NotRequired[str]
