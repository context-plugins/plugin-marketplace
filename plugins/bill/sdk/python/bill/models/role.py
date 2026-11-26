from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.organization_user_role_type import OrganizationUserRoleTypeOrStr


class Role(SdkBaseModel):
    id: Optional[str] = UNSET
    """BILL-generated ID of the user role. The value begins with ``0po``."""

    type_: Optional[OrganizationUserRoleTypeOrStr] = Field(default=UNSET, alias="type")
    description: Optional[str] = UNSET
    """User role description"""


class RoleDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[OrganizationUserRoleTypeOrStr]
    description: NotRequired[str]
