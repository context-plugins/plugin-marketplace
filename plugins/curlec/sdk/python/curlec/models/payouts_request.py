from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode1 import Mode1OrStr
from .enums.purpose import PurposeOrStr


class PayoutsRequest(SdkBaseModel):
    account_number: str
    """Razorpay X account number to debit"""

    fund_account_id: Optional[str] = UNSET
    """Required for standard payouts; omit for composite"""

    fund_account: Optional[Any] = UNSET
    """Inline fund account for composite payout"""

    amount: int
    """Amount in paise"""

    currency: Literal["INR"] = "INR"
    mode: Mode1OrStr
    """Case-sensitive"""

    purpose: PurposeOrStr
    narration: Optional[str] = UNSET
    reference_id: Optional[str] = UNSET
    notes: Optional[Any] = UNSET
    queue_if_low_balance: Optional[bool] = UNSET
    """true: queue payout when account balance is insufficient (default: false)"""


class PayoutsRequestDict(TypedDict):
    account_number: str
    fund_account_id: NotRequired[str]
    fund_account: NotRequired[Any]
    amount: int
    currency: Literal["INR"]
    mode: Mode1OrStr
    purpose: PurposeOrStr
    narration: NotRequired[str]
    reference_id: NotRequired[str]
    notes: NotRequired[Any]
    queue_if_low_balance: NotRequired[bool]
