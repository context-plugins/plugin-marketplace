from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCustomerContactRequestDto(SdkBaseModel):
    """Create a customer contact"""

    first_name: str = Field(alias="firstName")
    """Customer first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Customer last name"""

    email: EmailStr
    """Customer email address. The value must be unique in the organization."""

    phone: Optional[str] = UNSET
    """Customer phone number"""

    alt_phone: Optional[str] = Field(default=UNSET, alias="altPhone")
    """Customer alternate phone number. Use this field to sync with your accounting system."""

    alternate_email: Optional[EmailStr] = Field(default=UNSET, alias="alternateEmail")
    """Customer alternate email address. The customer cannot use this email address to sign in to the BILL web app."""


class CreateCustomerContactRequestDtoDict(TypedDict):
    first_name: str
    last_name: NotRequired[str]
    email: EmailStr
    phone: NotRequired[str]
    alt_phone: NotRequired[str]
    alternate_email: NotRequired[EmailStr]
