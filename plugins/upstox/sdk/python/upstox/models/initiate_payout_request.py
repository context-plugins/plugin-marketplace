from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InitiatePayoutRequest(SdkBaseModel):
    mode: str
    """Withdrawal mode. NEFT or IMPS"""

    amount: float
    """Withdrawal amount in INR"""


class InitiatePayoutRequestDict(TypedDict):
    mode: str
    amount: float
