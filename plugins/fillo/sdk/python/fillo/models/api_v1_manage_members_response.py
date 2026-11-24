from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role1 import Role1OrStr


class ApiV1ManageMembersResponse(SdkBaseModel):
    id: str
    email: str
    role: Role1OrStr


class ApiV1ManageMembersResponseDict(TypedDict):
    id: str
    email: str
    role: Role1OrStr
