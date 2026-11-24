from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_razorpay_invoices_api import CustomerRazorpayInvoicesApi, CustomerRazorpayInvoicesApiDict
from .enums.type2 import Type2OrStr
from .line_item_razorpay_invoices_api import LineItemRazorpayInvoicesApi, LineItemRazorpayInvoicesApiDict


class InvoicesRequest(SdkBaseModel):
    type_: Type2OrStr = Field(alias="type")
    """invoice: formal invoice; link: payment page."""

    description: Optional[str] = UNSET
    customer_id: Optional[str] = UNSET
    """Existing customer ID (cust_*). Provide this OR customer object, not both."""

    customer: Optional[CustomerRazorpayInvoicesApi] = UNSET
    """Inline customer details. Used when no customer_id is available."""

    line_items: Optional[list[LineItemRazorpayInvoicesApi]] = UNSET
    """Invoice line items. Each item must have name and amount (in paise), or an item_id to reference a catalog item."""

    currency: str = "INR"
    receipt: Optional[str] = UNSET
    """Your internal reference number."""

    comment: Optional[str] = UNSET
    terms: Optional[str] = UNSET
    """Payment terms shown on the invoice."""

    partial_payment: Optional[bool] = UNSET
    """Allow customer to pay a partial amount initially."""

    first_payment_min_amount: Optional[int] = UNSET
    """Minimum first payment amount in paise. Required when partial_payment=true."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp after which the invoice expires. Must be at least 15 minutes in the future."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class InvoicesRequestDict(TypedDict):
    type_: Type2OrStr
    description: NotRequired[str]
    customer_id: NotRequired[str]
    customer: NotRequired[CustomerRazorpayInvoicesApiDict]
    line_items: NotRequired[list[LineItemRazorpayInvoicesApiDict]]
    currency: NotRequired[str]
    receipt: NotRequired[str]
    comment: NotRequired[str]
    terms: NotRequired[str]
    partial_payment: NotRequired[bool]
    first_payment_min_amount: NotRequired[int]
    expire_by: NotRequired[int]
    notes: NotRequired[dict[str, str]]
