from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .receivers import Receivers, ReceiversDict


class VirtualAccountsRequest(SdkBaseModel):
    receivers: Receivers
    description: str
    """Purpose of the virtual account."""

    amount: Optional[int] = UNSET
    """Expected amount in paise. Set to 0 to accept any amount."""

    customer_id: Optional[str] = UNSET
    """Link to an existing customer (cust_*)."""

    close_by: Optional[int] = UNSET
    """Unix timestamp to auto-close the account. Maximum: 2147483647."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class VirtualAccountsRequestDict(TypedDict):
    receivers: ReceiversDict
    description: str
    amount: NotRequired[int]
    customer_id: NotRequired[str]
    close_by: NotRequired[int]
    notes: NotRequired[dict[str, str]]
