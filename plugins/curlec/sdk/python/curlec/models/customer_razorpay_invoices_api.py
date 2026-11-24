from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerRazorpayInvoicesApi(SdkBaseModel):
    """Inline customer details. Used when no customer_id is available."""

    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET


class CustomerRazorpayInvoicesApiDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact: NotRequired[str]
