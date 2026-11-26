from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import ScopeOrStr


class UserPermission(SdkBaseModel):
    id: Optional[UUID] = UNSET
    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """The permission set role ID"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The permission set display name"""

    company: Optional[str] = UNSET
    """The company name scope"""

    scope: Optional[ScopeOrStr] = UNSET
    app_id: Optional[UUID] = Field(default=UNSET, alias="appId")


class UserPermissionDict(TypedDict):
    id: NotRequired[UUID]
    role_id: NotRequired[str]
    display_name: NotRequired[str]
    company: NotRequired[str]
    scope: NotRequired[ScopeOrStr]
    app_id: NotRequired[UUID]
