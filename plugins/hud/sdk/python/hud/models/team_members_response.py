from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .team_member_item import TeamMemberItem, TeamMemberItemDict


class TeamMembersResponse(SdkBaseModel):
    members: list[TeamMemberItem]


class TeamMembersResponseDict(TypedDict):
    members: list[TeamMemberItemDict]
