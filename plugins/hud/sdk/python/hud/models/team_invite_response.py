from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .team_invite_failure import TeamInviteFailure, TeamInviteFailureDict


class TeamInviteResponse(SdkBaseModel):
    """Addresses that were invited, and why each remaining address was not."""

    succeeded: list[str]
    failed: list[TeamInviteFailure]


class TeamInviteResponseDict(TypedDict):
    succeeded: list[str]
    failed: list[TeamInviteFailureDict]
