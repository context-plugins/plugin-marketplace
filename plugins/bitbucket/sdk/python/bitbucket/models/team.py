from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .team_links import TeamLinks, TeamLinksDict


class Team(SdkBaseModel):
    """All Of account, object, team."""

    links: Optional[TeamLinks] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    display_name: Optional[str] = UNSET
    uuid: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class TeamDict(TypedDict):
    links: NotRequired[TeamLinksDict]
    created_on: NotRequired[RFC3339DateTime]
    display_name: NotRequired[str]
    uuid: NotRequired[str]
    type_: NotRequired[str]
