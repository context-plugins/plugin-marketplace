from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class Context(SdkBaseModel):
    role: RoleOrStr
    content: str


class ContextDict(TypedDict):
    role: RoleOrStr
    content: str
