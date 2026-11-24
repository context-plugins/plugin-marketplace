from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role1 import Role1OrStr


class ApiV1ManageMembersRequest(SdkBaseModel):
    role: Role1OrStr


class ApiV1ManageMembersRequestDict(TypedDict):
    role: Role1OrStr
