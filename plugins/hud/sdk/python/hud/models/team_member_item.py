from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.role import RoleOrStr


class TeamMemberItem(SdkBaseModel):
    user_id: UUID
    membership_id: int
    role: RoleOrStr
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    avatar_url: Optional[str] = UNSET
    joined_at: RFC3339DateTime


class TeamMemberItemDict(TypedDict):
    user_id: UUID
    membership_id: int
    role: RoleOrStr
    name: NotRequired[str]
    email: NotRequired[str]
    avatar_url: NotRequired[str]
    joined_at: RFC3339DateTime
