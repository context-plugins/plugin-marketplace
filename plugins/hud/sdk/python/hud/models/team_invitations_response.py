from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .team_invitation_item import TeamInvitationItem, TeamInvitationItemDict


class TeamInvitationsResponse(SdkBaseModel):
    invitations: list[TeamInvitationItem]


class TeamInvitationsResponseDict(TypedDict):
    invitations: list[TeamInvitationItemDict]
