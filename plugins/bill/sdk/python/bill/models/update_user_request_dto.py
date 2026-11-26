from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.input_role_type import InputRoleTypeOrStr


class UpdateUserRequestDto(SdkBaseModel):
    """Update a user (role updated)"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """User first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """User last name"""

    email: Optional[str] = UNSET
    """User email address"""

    role: Optional[InputRoleTypeOrStr] = UNSET
    date_of_birth: Optional[Date] = Field(default=UNSET, alias="dateOfBirth")
    """User date of birth. The value is in the ``yyyy-MM-dd`` format."""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """User phone number"""


class UpdateUserRequestDtoDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    email: NotRequired[str]
    role: NotRequired[InputRoleTypeOrStr]
    date_of_birth: NotRequired[Date]
    phone_number: NotRequired[str]
