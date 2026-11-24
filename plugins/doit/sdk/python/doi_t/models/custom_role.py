from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomRole(SdkBaseModel):
    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    permissions: Optional[list[str]] = UNSET


class CustomRoleDict(TypedDict):
    role_id: NotRequired[str]
    permissions: NotRequired[list[str]]
