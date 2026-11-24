from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AwsReservedInstanceRecurringCharge(SdkBaseModel):
    amount: float
    """Amount of the recurring charge."""

    frequency: str
    """Billing frequency of the recurring charge (for example, ``Hourly``)."""


class AwsReservedInstanceRecurringChargeDict(TypedDict):
    amount: float
    frequency: str
