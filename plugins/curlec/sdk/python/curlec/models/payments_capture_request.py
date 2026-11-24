from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaymentsCaptureRequest(SdkBaseModel):
    amount: int
    """Amount to capture in paise. Must equal authorized amount unless partial capture is enabled."""

    currency: str = "INR"


class PaymentsCaptureRequestDict(TypedDict):
    amount: int
    currency: str
