from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user_permission import UserPermission, UserPermissionDict


class CompaniesApiUsersApiUserPermissionsResponse(SdkBaseModel):
    value: Optional[list[UserPermission]] = UNSET


class CompaniesApiUsersApiUserPermissionsResponseDict(TypedDict):
    value: NotRequired[list[UserPermissionDict]]
