from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TeamInvitationRevokeRequest(SdkBaseModel):
    invitation_ids: list[str]


class TeamInvitationRevokeRequestDict(TypedDict):
    invitation_ids: list[str]
