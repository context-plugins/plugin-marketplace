from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_virtual_accounts_api import EntityRazorpayVirtualAccountsApiOrStr
from .enums.status_razorpay_virtual_accounts_api import StatusRazorpayVirtualAccountsApiOrStr
from .receiver import Receiver, ReceiverDict


class VirtualAccount(SdkBaseModel):
    """A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each payment creates a
    BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_"""

    id: Optional[str] = UNSET
    """Virtual account ID. Prefix: va_"""

    name: Optional[str] = UNSET
    """Display name of the virtual account."""

    entity: Optional[EntityRazorpayVirtualAccountsApiOrStr] = UNSET
    description: Optional[str] = UNSET
    """Purpose or description of the virtual account."""

    amount_expected: Optional[int] = UNSET
    """Expected payment amount in paise. 0 means any amount is accepted."""

    amount_paid: Optional[int] = UNSET
    """Total amount received so far in paise."""

    status: Optional[StatusRazorpayVirtualAccountsApiOrStr] = UNSET
    """active = accepting payments; closed = no longer accepting payments."""

    receivers: Optional[list[Receiver]] = UNSET
    """Payment receivers assigned to this virtual account. Can include bank_account (ba_*) and/or vpa (vpa_*)
    receivers."""

    close_by: Optional[int] = UNSET
    """Unix timestamp by which the account will auto-close. Maximum value: 2147483647."""

    closed_at: Optional[int] = UNSET
    """Unix timestamp when the account was closed."""

    customer_id: Optional[str] = UNSET
    """Customer ID linked to this virtual account (cust_*)."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class VirtualAccountDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    entity: NotRequired[EntityRazorpayVirtualAccountsApiOrStr]
    description: NotRequired[str]
    amount_expected: NotRequired[int]
    amount_paid: NotRequired[int]
    status: NotRequired[StatusRazorpayVirtualAccountsApiOrStr]
    receivers: NotRequired[list[ReceiverDict]]
    close_by: NotRequired[int]
    closed_at: NotRequired[int]
    customer_id: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
