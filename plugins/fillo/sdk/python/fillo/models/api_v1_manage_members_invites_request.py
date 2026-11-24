from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.role import RoleOrStr


class ApiV1ManageMembersInvitesRequest(SdkBaseModel):
    email: EmailStr
    role: Optional[RoleOrStr] = UNSET
    """Defaults to member."""


class ApiV1ManageMembersInvitesRequestDict(TypedDict):
    email: EmailStr
    role: NotRequired[RoleOrStr]
