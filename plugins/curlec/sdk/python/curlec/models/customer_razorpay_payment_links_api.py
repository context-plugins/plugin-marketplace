from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerRazorpayPaymentLinksApi(SdkBaseModel):
    """Customer contact details. These are not auto-populated on the checkout page — customer must enter them
    manually."""

    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET


class CustomerRazorpayPaymentLinksApiDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact: NotRequired[str]
