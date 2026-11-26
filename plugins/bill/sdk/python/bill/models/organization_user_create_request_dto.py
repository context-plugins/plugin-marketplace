from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class OrganizationUserCreateRequestDto(SdkBaseModel):
    """Create a user"""

    first_name: str = Field(alias="firstName")
    """User first name"""

    last_name: str = Field(alias="lastName")
    """User last name"""

    email: str
    """User email address"""

    role_id: str = Field(alias="roleId")
    """BILL-generated ID of the user role. The value begins with ``0po``.

    If you do not set ``roleId``, the default ``ADMINISTRATOR`` user role is assigned to the created user. You can get
    the list of available user roles with ``GET /v3/roles``."""

    accept_terms_of_service: bool = Field(alias="acceptTermsOfService")
    """Set as ``true`` if the user accepts the BILL terms of service"""


class OrganizationUserCreateRequestDtoDict(TypedDict):
    first_name: str
    last_name: str
    email: str
    role_id: str
    accept_terms_of_service: bool
