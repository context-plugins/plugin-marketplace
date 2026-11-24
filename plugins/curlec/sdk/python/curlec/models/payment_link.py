from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_razorpay_payment_links_api import CustomerRazorpayPaymentLinksApi, CustomerRazorpayPaymentLinksApiDict
from .enums.callback_method import CallbackMethodOrStr
from .enums.entity_razorpay_payment_links_api import EntityRazorpayPaymentLinksApiOrStr
from .enums.status_razorpay_payment_links_api import StatusRazorpayPaymentLinksApiOrStr
from .notify import Notify, NotifyDict
from .payment_razorpay_payment_links_api import PaymentRazorpayPaymentLinksApi, PaymentRazorpayPaymentLinksApiDict


class PaymentLink(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique payment link identifier. Prefix: plink_"""

    entity: Optional[EntityRazorpayPaymentLinksApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Payment amount in smallest currency unit (paise for INR). Three-decimal currencies (KWD, BHD, OMR): drop last
    decimal digit (e.g. 295.991 KWD → 295990). Zero-decimal currencies (JPY): pass value as-is."""

    amount_paid: Optional[int] = UNSET
    """Total amount paid by customer."""

    currency: str = "INR"
    """ISO 4217 currency code. UPI Payment Links only support INR."""

    accept_partial: Optional[bool] = UNSET
    """Allow partial payments. Not supported for UPI links."""

    first_min_partial_amount: Optional[int] = UNSET
    """Minimum amount required for the first partial payment."""

    description: Optional[str] = UNSET
    """Brief description. Max 2048 characters."""

    reference_id: Optional[str] = UNSET
    """Your unique tracking reference. Max 40 characters. Must be unique per link."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp when link expires. Default: 6 months from creation. Must be at least 15 minutes in the future."""

    expired_at: Optional[int] = UNSET
    """Unix timestamp when link actually expired."""

    cancelled_at: Optional[int] = UNSET
    """Unix timestamp when link was cancelled."""

    status: Optional[StatusRazorpayPaymentLinksApiOrStr] = UNSET
    """created: awaiting payment. partially_paid: one or more partial payments received. expired: past expiry with no
    full payment. cancelled: manually cancelled. paid: fully paid."""

    upi_link: Optional[bool] = UNSET
    """true if this is a UPI Payment Link, false for standard."""

    short_url: Optional[str] = UNSET
    """Shareable short URL for the payment link."""

    callback_url: Optional[str] = UNSET
    """Redirect URL after payment completion."""

    callback_method: Optional[CallbackMethodOrStr] = UNSET
    customer: Optional[CustomerRazorpayPaymentLinksApi] = UNSET
    """Customer contact details. These are not auto-populated on the checkout page — customer must enter them
    manually."""

    notify: Optional[Notify] = UNSET
    reminder_enable: Optional[bool] = UNSET
    """Send automatic payment reminders."""

    payments: Optional[list[PaymentRazorpayPaymentLinksApi]] = UNSET
    """Captured payment records. Populated only after successful payment capture."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    order_id: Optional[str] = UNSET
    user_id: Optional[str] = UNSET
    """Identifier for the user role that created the link."""

    created_at: Optional[int] = UNSET
    updated_at: Optional[int] = UNSET


class PaymentLinkDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayPaymentLinksApiOrStr]
    amount: NotRequired[int]
    amount_paid: NotRequired[int]
    currency: NotRequired[str]
    accept_partial: NotRequired[bool]
    first_min_partial_amount: NotRequired[int]
    description: NotRequired[str]
    reference_id: NotRequired[str]
    expire_by: NotRequired[int]
    expired_at: NotRequired[int]
    cancelled_at: NotRequired[int]
    status: NotRequired[StatusRazorpayPaymentLinksApiOrStr]
    upi_link: NotRequired[bool]
    short_url: NotRequired[str]
    callback_url: NotRequired[str]
    callback_method: NotRequired[CallbackMethodOrStr]
    customer: NotRequired[CustomerRazorpayPaymentLinksApiDict]
    notify: NotRequired[NotifyDict]
    reminder_enable: NotRequired[bool]
    payments: NotRequired[list[PaymentRazorpayPaymentLinksApiDict]]
    notes: NotRequired[dict[str, str]]
    order_id: NotRequired[str]
    user_id: NotRequired[str]
    created_at: NotRequired[int]
    updated_at: NotRequired[int]
