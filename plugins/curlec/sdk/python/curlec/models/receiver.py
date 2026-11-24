from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_virtual_accounts_api import Entity1RazorpayVirtualAccountsApiOrStr
from .enums.flow import FlowOrStr


class Receiver(SdkBaseModel):
    id: Optional[str] = UNSET
    """Receiver ID. Prefix: ba_ for bank account, vpa_ for VPA."""

    entity: Optional[Entity1RazorpayVirtualAccountsApiOrStr] = UNSET
    ifsc: Optional[str] = UNSET
    """IFSC code (bank accounts only)."""

    bank_name: Optional[str] = UNSET
    """Bank name (bank accounts only)."""

    name: Optional[str] = UNSET
    """Account holder name (bank accounts) or VPA address (VPAs)."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    account_number: Optional[str] = UNSET
    """Virtual account number (bank accounts only)."""

    username: Optional[str] = UNSET
    """UPI username part of the VPA (VPAs only)."""

    handle: Optional[str] = UNSET
    """UPI handle (e.g., razorpay) (VPAs only)."""

    flow: Optional[FlowOrStr] = UNSET
    """Flow type for VPA receivers."""


class ReceiverDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1RazorpayVirtualAccountsApiOrStr]
    ifsc: NotRequired[str]
    bank_name: NotRequired[str]
    name: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    account_number: NotRequired[str]
    username: NotRequired[str]
    handle: NotRequired[str]
    flow: NotRequired[FlowOrStr]
