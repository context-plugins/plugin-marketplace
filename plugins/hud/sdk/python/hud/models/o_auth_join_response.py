from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class OAuthJoinResponse(SdkBaseModel):
    """The token user's membership in the application's team."""

    membership_id: int
    team_id: UUID
    role: RoleOrStr


class OAuthJoinResponseDict(TypedDict):
    membership_id: int
    team_id: UUID
    role: RoleOrStr
