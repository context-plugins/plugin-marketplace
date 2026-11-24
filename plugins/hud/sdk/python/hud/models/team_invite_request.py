from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class TeamInviteRequest(SdkBaseModel):
    emails: list[EmailStr]
    role: RoleOrStr


class TeamInviteRequestDict(TypedDict):
    emails: list[EmailStr]
    role: RoleOrStr
