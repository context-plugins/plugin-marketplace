from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Customer1RazorpayPaymentLinksApi(SdkBaseModel):
    """Customer contact details. Not auto-populated on checkout — customer must enter manually."""

    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    contact: Optional[str] = UNSET


class Customer1RazorpayPaymentLinksApiDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    contact: NotRequired[str]
