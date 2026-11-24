from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role import RoleOrStr


class Before(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    seat: bool
    role: RoleOrStr


class BeforeDict(TypedDict):
    seat: bool
    role: RoleOrStr
