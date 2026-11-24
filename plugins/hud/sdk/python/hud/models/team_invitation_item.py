from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.role import RoleOrStr


class TeamInvitationItem(SdkBaseModel):
    """A pending invitation to the team."""

    id: str
    email: str
    role: RoleOrStr
    created_at: RFC3339DateTime


class TeamInvitationItemDict(TypedDict):
    id: str
    email: str
    role: RoleOrStr
    created_at: RFC3339DateTime
