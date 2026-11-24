from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phone_number import PhoneNumber, PhoneNumberDict


class ApiV1NumbersResponse1(SdkBaseModel):
    number: Optional[PhoneNumber] = UNSET


class ApiV1NumbersResponse1Dict(TypedDict):
    number: NotRequired[PhoneNumberDict]
