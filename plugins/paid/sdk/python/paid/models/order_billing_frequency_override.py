from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.order_billing_frequency_override_frequency import OrderBillingFrequencyOverrideFrequencyOrStr


class OrderBillingFrequencyOverride(SdkBaseModel):
    frequency: OrderBillingFrequencyOverrideFrequencyOrStr
    custom_months: OptionalNullable[int] = Field(default=UNSET, alias="customMonths")


class OrderBillingFrequencyOverrideDict(TypedDict):
    frequency: OrderBillingFrequencyOverrideFrequencyOrStr
    custom_months: NotRequired[int | None]
