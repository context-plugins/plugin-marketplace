from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer1_razorpay_payment_links_api import Customer1RazorpayPaymentLinksApi, Customer1RazorpayPaymentLinksApiDict
from .enums.callback_method1 import CallbackMethod1OrStr
from .notify1 import Notify1, Notify1Dict
from .options import Options, OptionsDict


class PaymentLinksRequest(SdkBaseModel):
    amount: int
    """Amount in smallest currency unit (paise for INR). Example: 50000 for ₹500."""

    currency: str = "INR"
    """ISO 4217 currency code. UPI links support INR only."""

    upi_link: bool = False
    """Set true to create a UPI-only Payment Link. Not available in test mode."""

    accept_partial: Optional[bool] = UNSET
    """Enable partial payments. Not supported for UPI links."""

    first_min_partial_amount: Optional[int] = UNSET
    """Minimum first partial payment amount in paise."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp for link expiry. Max 6 months from creation. Must be at least 15 minutes in the future."""

    reference_id: Optional[str] = UNSET
    """Your unique tracking reference. Max 40 characters. Must be unique."""

    description: Optional[str] = UNSET
    """Brief description shown on the payment page. Max 2048 characters."""

    customer: Optional[Customer1RazorpayPaymentLinksApi] = UNSET
    """Customer contact details. Not auto-populated on checkout — customer must enter manually."""

    notify: Optional[Notify1] = UNSET
    """Notification handlers. Set true for Razorpay to send, false to handle yourself."""

    reminder_enable: Optional[bool] = UNSET
    """Send automatic payment reminders."""

    callback_url: Optional[str] = UNSET
    """Redirect URL after payment completion."""

    callback_method: Optional[CallbackMethod1OrStr] = UNSET
    """Required when callback_url is set."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    options: Optional[Options] = UNSET
    """Checkout and payment page customization."""


class PaymentLinksRequestDict(TypedDict):
    amount: int
    currency: NotRequired[str]
    upi_link: NotRequired[bool]
    accept_partial: NotRequired[bool]
    first_min_partial_amount: NotRequired[int]
    expire_by: NotRequired[int]
    reference_id: NotRequired[str]
    description: NotRequired[str]
    customer: NotRequired[Customer1RazorpayPaymentLinksApiDict]
    notify: NotRequired[Notify1Dict]
    reminder_enable: NotRequired[bool]
    callback_url: NotRequired[str]
    callback_method: NotRequired[CallbackMethod1OrStr]
    notes: NotRequired[dict[str, str]]
    options: NotRequired[OptionsDict]
