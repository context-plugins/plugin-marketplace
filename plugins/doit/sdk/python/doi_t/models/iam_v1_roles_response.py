from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .role_doi_t_roles_api import RoleDoiTRolesApi, RoleDoiTRolesApiDict


class IamV1RolesResponse(SdkBaseModel):
    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of roles returned."""

    roles: Optional[list[RoleDoiTRolesApi]] = UNSET


class IamV1RolesResponseDict(TypedDict):
    row_count: NotRequired[int]
    roles: NotRequired[list[RoleDoiTRolesApiDict]]
