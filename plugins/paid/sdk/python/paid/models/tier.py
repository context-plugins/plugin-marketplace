from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Tier(SdkBaseModel):
    lower_bound: Optional[float] = Field(default=UNSET, alias="lowerBound")
    upper_bound: Optional[float] = Field(default=UNSET, alias="upperBound")
    price: Optional[float] = UNSET


class TierDict(TypedDict):
    lower_bound: NotRequired[float]
    upper_bound: NotRequired[float]
    price: NotRequired[float]
