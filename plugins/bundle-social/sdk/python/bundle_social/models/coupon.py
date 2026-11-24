from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.duration import DurationOrStr


class Coupon(SdkBaseModel):
    id: str
    name: OptionalNullable[str] = UNSET
    amount_off: OptionalNullable[float] = Field(default=UNSET, alias="amountOff")
    percent_off: OptionalNullable[float] = Field(default=UNSET, alias="percentOff")
    duration: DurationOrStr
    duration_in_months: OptionalNullable[float] = Field(default=UNSET, alias="durationInMonths")
    max_redemptions: OptionalNullable[float] = Field(default=UNSET, alias="maxRedemptions")
    valid: bool
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class CouponDict(TypedDict):
    id: str
    name: NotRequired[str | None]
    amount_off: NotRequired[float | None]
    percent_off: NotRequired[float | None]
    duration: DurationOrStr
    duration_in_months: NotRequired[float | None]
    max_redemptions: NotRequired[float | None]
    valid: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
