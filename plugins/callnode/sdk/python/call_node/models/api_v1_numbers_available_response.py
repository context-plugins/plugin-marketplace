from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .available_number import AvailableNumber, AvailableNumberDict
from .number_pricing import NumberPricing, NumberPricingDict


class ApiV1NumbersAvailableResponse(SdkBaseModel):
    numbers: Optional[list[AvailableNumber]] = UNSET
    count: Optional[int] = UNSET
    pricing: Optional[NumberPricing] = UNSET
    """What your account pays for this number type, plan-aware."""


class ApiV1NumbersAvailableResponseDict(TypedDict):
    numbers: NotRequired[list[AvailableNumberDict]]
    count: NotRequired[int]
    pricing: NotRequired[NumberPricingDict]
