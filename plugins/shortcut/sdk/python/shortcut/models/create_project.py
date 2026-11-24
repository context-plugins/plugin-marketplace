from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateProject(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Project description."""

    color: Optional[str] = UNSET
    """The color you wish to use for the Project in the system."""

    name: str
    """The name of the Project."""

    start_time: Optional[RFC3339DateTime] = UNSET
    """The date at which the Project was started."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date it is created but can be set to reflect another date."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any members you want to add as Owners on this new Epic."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Project has been imported from another tool, the
    ID in the other tool can be indicated here."""

    team_id: int
    """The ID of the team the project belongs to."""

    iteration_length: Optional[int] = UNSET
    """The number of weeks per iteration in this Project."""

    abbreviation: Optional[str] = UNSET
    """The Project abbreviation used in Story summaries. Should be kept to 3 characters at most."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date it is created but can be set to reflect another date."""


class CreateProjectDict(TypedDict):
    description: NotRequired[str]
    color: NotRequired[str]
    name: str
    start_time: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    follower_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
    team_id: int
    iteration_length: NotRequired[int]
    abbreviation: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
