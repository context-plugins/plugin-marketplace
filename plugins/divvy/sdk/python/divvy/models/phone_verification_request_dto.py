from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.phone_type import PhoneTypeOrStr


class PhoneVerificationRequestDto(SdkBaseModel):
    """Add a phone number for risk verification"""

    phone_number: str = Field(alias="phoneNumber")
    """Phone number"""

    phone_type: PhoneTypeOrStr = Field(alias="phoneType")


class PhoneVerificationRequestDtoDict(TypedDict):
    phone_number: str
    phone_type: PhoneTypeOrStr
