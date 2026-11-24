from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class User(SdkBaseModel):
    role: RoleOrStr
    """The role of the authenticated user in the project."""


class UserDict(TypedDict):
    role: RoleOrStr
