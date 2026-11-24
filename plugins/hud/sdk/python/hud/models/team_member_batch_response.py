from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .team_member_failure import TeamMemberFailure, TeamMemberFailureDict


class TeamMemberBatchResponse(SdkBaseModel):
    """Memberships the change applied to, and why it did not apply to the rest."""

    succeeded: list[int]
    failed: list[TeamMemberFailure]


class TeamMemberBatchResponseDict(TypedDict):
    succeeded: list[int]
    failed: list[TeamMemberFailureDict]
