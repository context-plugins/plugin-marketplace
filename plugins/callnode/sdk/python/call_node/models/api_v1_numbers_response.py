from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phone_number import PhoneNumber, PhoneNumberDict


class ApiV1NumbersResponse(SdkBaseModel):
    numbers: Optional[list[PhoneNumber]] = UNSET
    count: Optional[int] = UNSET


class ApiV1NumbersResponseDict(TypedDict):
    numbers: NotRequired[list[PhoneNumberDict]]
    count: NotRequired[int]
