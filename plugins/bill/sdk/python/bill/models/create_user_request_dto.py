from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.input_role_type import InputRoleTypeOrStr


class CreateUserRequestDto(SdkBaseModel):
    """Create a user"""

    first_name: str = Field(alias="firstName")
    """User first name"""

    last_name: str = Field(alias="lastName")
    """User last name"""

    email: str
    """User email address"""

    role: InputRoleTypeOrStr
    date_of_birth: Optional[Date] = Field(default=UNSET, alias="dateOfBirth")
    """User date of birth. The value is in the ``yyyy-MM-dd`` format."""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """User phone number"""


class CreateUserRequestDtoDict(TypedDict):
    first_name: str
    last_name: str
    email: str
    role: InputRoleTypeOrStr
    date_of_birth: NotRequired[Date]
    phone_number: NotRequired[str]
