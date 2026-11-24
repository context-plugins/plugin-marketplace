from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency import CurrencyOrStr
from .enums.entity_razorpay_x_payouts_api import EntityRazorpayXPayoutsApiOrStr
from .enums.mode_razorpay_x_payouts_api import ModeRazorpayXPayoutsApiOrStr
from .enums.purpose import PurposeOrStr
from .enums.status_razorpay_x_payouts_api import StatusRazorpayXPayoutsApiOrStr
from .fund_account_razorpay_x_payouts_api import FundAccountRazorpayXPayoutsApi, FundAccountRazorpayXPayoutsApiDict
from .status_details import StatusDetails, StatusDetailsDict


class Payout(SdkBaseModel):
    """RazorpayX payout disbursement. Idempotency header X-Payout-Idempotency required since March 15, 2025."""

    id: Optional[str] = UNSET
    """Payout ID (pout_*)"""

    entity: Optional[EntityRazorpayXPayoutsApiOrStr] = UNSET
    fund_account_id: Optional[str] = UNSET
    fund_account: Optional[FundAccountRazorpayXPayoutsApi] = UNSET
    """Payout destination linked to a Contact. Immutable after creation."""

    amount: Optional[int] = UNSET
    """Amount in paise (min 100)"""

    currency: Optional[CurrencyOrStr] = UNSET
    fees: Optional[int] = UNSET
    tax: Optional[int] = UNSET
    mode: Optional[ModeRazorpayXPayoutsApiOrStr] = UNSET
    """Transfer mode — case-sensitive. amazonpay limited to ₹10,000 per transaction; no custom narration allowed."""

    utr: Optional[str] = UNSET
    """Unique Transaction Reference from bank"""

    reference_id: Optional[str] = UNSET
    debit_account_number: Optional[str] = UNSET
    narration: Optional[str] = UNSET
    purpose: Optional[PurposeOrStr] = UNSET
    fee_type: Optional[str] = UNSET
    status: Optional[StatusRazorpayXPayoutsApiOrStr] = UNSET
    status_details: Optional[StatusDetails] = UNSET
    batch_id: Optional[str] = UNSET
    notes: Optional[Any] = UNSET
    created_at: Optional[int] = UNSET
    queue_if_low_balance: Optional[bool] = UNSET
    """true: queue payout when account balance is insufficient. false (default): fail immediately."""


class PayoutDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayXPayoutsApiOrStr]
    fund_account_id: NotRequired[str]
    fund_account: NotRequired[FundAccountRazorpayXPayoutsApiDict]
    amount: NotRequired[int]
    currency: NotRequired[CurrencyOrStr]
    fees: NotRequired[int]
    tax: NotRequired[int]
    mode: NotRequired[ModeRazorpayXPayoutsApiOrStr]
    utr: NotRequired[str]
    reference_id: NotRequired[str]
    debit_account_number: NotRequired[str]
    narration: NotRequired[str]
    purpose: NotRequired[PurposeOrStr]
    fee_type: NotRequired[str]
    status: NotRequired[StatusRazorpayXPayoutsApiOrStr]
    status_details: NotRequired[StatusDetailsDict]
    batch_id: NotRequired[str]
    notes: NotRequired[Any]
    created_at: NotRequired[int]
    queue_if_low_balance: NotRequired[bool]
