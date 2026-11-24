from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.duration import DurationOrStr


class Coupon1(SdkBaseModel):
    percent_off: float = Field(alias="percentOff")
    duration: DurationOrStr
    duration_in_months: OptionalNullable[float] = Field(default=UNSET, alias="durationInMonths")
    valid: bool


class Coupon1Dict(TypedDict):
    percent_off: float
    duration: DurationOrStr
    duration_in_months: NotRequired[float | None]
    valid: bool
