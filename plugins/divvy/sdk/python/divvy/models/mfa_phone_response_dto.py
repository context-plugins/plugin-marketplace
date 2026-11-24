from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mfa_phone_type import MfaPhoneTypeOrStr


class MfaPhoneResponseDto(SdkBaseModel):
    """MFA Phone."""

    type_: Optional[MfaPhoneTypeOrStr] = Field(default=UNSET, alias="type")
    last4digits: Optional[str] = UNSET
    """Phone number last four digits"""

    primary: Optional[bool] = UNSET
    """Set as ``true`` to mark the phone number as the primary mobile device"""


class MfaPhoneResponseDtoDict(TypedDict):
    type_: NotRequired[MfaPhoneTypeOrStr]
    last4digits: NotRequired[str]
    primary: NotRequired[bool]
