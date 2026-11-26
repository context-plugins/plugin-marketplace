from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.organization_user_role_type import OrganizationUserRoleTypeOrStr


class RoleResponseDto(SdkBaseModel):
    """User roles response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the user role. The value begins with ``0po``."""

    type_: Optional[OrganizationUserRoleTypeOrStr] = Field(default=UNSET, alias="type")
    description: Optional[str] = UNSET
    """User role description"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class RoleResponseDtoDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[OrganizationUserRoleTypeOrStr]
    description: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
