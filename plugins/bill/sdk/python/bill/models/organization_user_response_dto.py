from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .role import Role, RoleDict


class OrganizationUserResponseDto(SdkBaseModel):
    """Users response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the user. The value begins with ``006``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the user is archived"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """User first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """User last name"""

    email: Optional[str] = UNSET
    """User email address"""

    role: Optional[Role] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class OrganizationUserResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    role: NotRequired[RoleDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
