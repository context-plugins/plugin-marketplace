from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PartnerUserUpdateRequestDto(SdkBaseModel):
    """Update a user (last name updated)"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """User first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """User last name"""

    email: Optional[str] = UNSET
    """User email address"""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """BILL-generated ID of the user role. The value begins with ``0po``.

    If you do not set ``roleId``, the default ``ADMINISTRATOR`` user role is assigned to the created user. You can get
    the list of available user roles with ``GET /v3/partner/roles``."""


class PartnerUserUpdateRequestDtoDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    role_id: NotRequired[str]
