from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModifyPayoutRequest(SdkBaseModel):
    amount: float
    """Withdrawal amount in INR"""


class ModifyPayoutRequestDict(TypedDict):
    amount: float
