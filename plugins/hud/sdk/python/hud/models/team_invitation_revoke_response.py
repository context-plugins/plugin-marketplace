from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .team_invitation_failure import TeamInvitationFailure, TeamInvitationFailureDict


class TeamInvitationRevokeResponse(SdkBaseModel):
    """Invitations that are no longer pending, and why each remaining one still is."""

    succeeded: list[str]
    failed: list[TeamInvitationFailure]


class TeamInvitationRevokeResponseDict(TypedDict):
    succeeded: list[str]
    failed: list[TeamInvitationFailureDict]
