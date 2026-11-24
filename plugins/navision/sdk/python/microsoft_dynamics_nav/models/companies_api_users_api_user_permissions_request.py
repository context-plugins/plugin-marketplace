from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompaniesApiUsersApiUserPermissionsRequest(SdkBaseModel):
    role_id: str = Field(alias="roleId")
    """The permission set role ID"""


class CompaniesApiUsersApiUserPermissionsRequestDict(TypedDict):
    role_id: str
