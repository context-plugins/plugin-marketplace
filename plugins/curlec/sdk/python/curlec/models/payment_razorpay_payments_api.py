from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acquirer_data import AcquirerData, AcquirerDataDict
from .card_details import CardDetails, CardDetailsDict
from .enums.entity_razorpay_payments_api import EntityRazorpayPaymentsApiOrStr
from .enums.method import MethodOrStr
from .enums.refund_status import RefundStatusOrStr
from .enums.status_razorpay_payments_api import StatusRazorpayPaymentsApiOrStr
from .upi_details import UpiDetails, UpiDetailsDict


class PaymentRazorpayPaymentsApi(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique payment identifier. Prefix: pay_"""

    entity: Optional[EntityRazorpayPaymentsApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Payment amount in paise."""

    currency: Optional[str] = UNSET
    status: Optional[StatusRazorpayPaymentsApiOrStr] = UNSET
    """created: initiated. authorized: bank approved, not yet captured. captured: funds collected. refunded: fully
    refunded. failed: transaction failed."""

    order_id: Optional[str] = UNSET
    """Associated order ID (order_*)."""

    invoice_id: Optional[str] = UNSET
    international: Optional[bool] = UNSET
    method: Optional[MethodOrStr] = UNSET
    amount_refunded: Optional[int] = UNSET
    """Total refunded amount in paise."""

    refund_status: Optional[RefundStatusOrStr] = UNSET
    captured: Optional[bool] = UNSET
    description: Optional[str] = UNSET
    card_id: Optional[str] = UNSET
    card: Optional[CardDetails] = UNSET
    bank: Optional[str] = UNSET
    """Bank code for netbanking. Example: HDFC."""

    wallet: Optional[str] = UNSET
    """Wallet name. Examples: paytm, mobikwik."""

    vpa: Optional[str] = UNSET
    upi: Optional[UpiDetails] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET
    customer_id: Optional[str] = UNSET
    token_id: Optional[str] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    fee: Optional[int] = UNSET
    """Razorpay fee charged (paise)."""

    tax: Optional[int] = UNSET
    """GST on the fee (paise)."""

    error_code: Optional[str] = UNSET
    error_description: Optional[str] = UNSET
    error_source: Optional[str] = UNSET
    error_step: Optional[str] = UNSET
    error_reason: Optional[str] = UNSET
    acquirer_data: Optional[AcquirerData] = UNSET
    created_at: Optional[int] = UNSET


class PaymentRazorpayPaymentsApiDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayPaymentsApiOrStr]
    amount: NotRequired[int]
    currency: NotRequired[str]
    status: NotRequired[StatusRazorpayPaymentsApiOrStr]
    order_id: NotRequired[str]
    invoice_id: NotRequired[str]
    international: NotRequired[bool]
    method: NotRequired[MethodOrStr]
    amount_refunded: NotRequired[int]
    refund_status: NotRequired[RefundStatusOrStr]
    captured: NotRequired[bool]
    description: NotRequired[str]
    card_id: NotRequired[str]
    card: NotRequired[CardDetailsDict]
    bank: NotRequired[str]
    wallet: NotRequired[str]
    vpa: NotRequired[str]
    upi: NotRequired[UpiDetailsDict]
    email: NotRequired[str]
    contact: NotRequired[str]
    customer_id: NotRequired[str]
    token_id: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    fee: NotRequired[int]
    tax: NotRequired[int]
    error_code: NotRequired[str]
    error_description: NotRequired[str]
    error_source: NotRequired[str]
    error_step: NotRequired[str]
    error_reason: NotRequired[str]
    acquirer_data: NotRequired[AcquirerDataDict]
    created_at: NotRequired[int]
