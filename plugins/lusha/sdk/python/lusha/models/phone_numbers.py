from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.phone_type import PhoneTypeOrStr


class PhoneNumbers(SdkBaseModel):
    number: Optional[str] = UNSET
    """The phone number"""

    phone_type: PhoneTypeOrStr = Field(alias="phoneType")
    """The type of phone number"""

    do_not_call: bool = Field(alias="doNotCall")
    """Indicates whether the phone number is listed as "Do Not Call" (DNC)."""

    update_date: str = Field(alias="updateDate")
    """The update date of the phone number"""


class PhoneNumbersDict(TypedDict):
    number: NotRequired[str]
    phone_type: PhoneTypeOrStr
    do_not_call: bool
    update_date: str
