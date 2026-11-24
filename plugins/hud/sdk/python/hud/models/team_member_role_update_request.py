from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class TeamMemberRoleUpdateRequest(SdkBaseModel):
    membership_ids: list[int]
    role: RoleOrStr


class TeamMemberRoleUpdateRequestDict(TypedDict):
    membership_ids: list[int]
    role: RoleOrStr
