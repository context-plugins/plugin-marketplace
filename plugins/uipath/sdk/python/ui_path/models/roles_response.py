from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .role import Role, RoleDict


class RolesResponse(SdkBaseModel):
    roles: Optional[list[Role]] = UNSET


class RolesResponseDict(TypedDict):
    roles: NotRequired[list[RoleDict]]
