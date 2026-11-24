from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PartnerUserCreateRequestDto(SdkBaseModel):
    """Create a user"""

    first_name: str = Field(alias="firstName")
    """User first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """User last name"""

    email: str
    """User email address"""

    role_id: Optional[str] = Field(default=UNSET, alias="roleId")
    """BILL-generated ID of the user role. The value begins with ``0po``.

    If you do not set ``roleId``, the default ``ADMINISTRATOR`` user role is assigned to the created user. You can get
    the list of available user roles with ``GET /v3/partner/roles``."""

    username: str
    """Username for signing in as the user.

    Set ``username`` as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not
    case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify
    each user."""

    external_reference_id: Optional[str] = Field(default=UNSET, alias="externalReferenceId")
    """Reference ID used as an external identifier.

    You can set this field as a unique alphanumeric value for your system to refer to the created user."""

    accept_terms_of_service: bool = Field(alias="acceptTermsOfService")
    """Set as ``true`` if the user accepts the BILL terms of service"""


class PartnerUserCreateRequestDtoDict(TypedDict):
    first_name: str
    last_name: NotRequired[str]
    email: str
    role_id: NotRequired[str]
    username: str
    external_reference_id: NotRequired[str]
    accept_terms_of_service: bool
