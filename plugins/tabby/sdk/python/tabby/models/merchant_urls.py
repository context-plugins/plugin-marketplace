from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MerchantUrls(SdkBaseModel):
    """Used for redirecting the customer after Tabby Checkout flow. Required for Web integration, optional for Mobile
    App integration."""

    success: Optional[str] = UNSET
    """URL to redirect the customer to merchant's 'Thank you' page after success payment. Payment status =
    ``AUTHORIZED`` or ``CLOSED``."""

    cancel: Optional[str] = UNSET
    """URL to redirect the customer back to merchant's Checkout page after payment cancellation by customer. Payment
    status = ``EXPIRED``."""

    failure: Optional[str] = UNSET
    """URL to redirect the customer back to merchant's Checkout page after payment rejection by Tabby. Payment status =
    ``REJECTED``."""


class MerchantUrlsDict(TypedDict):
    success: NotRequired[str]
    cancel: NotRequired[str]
    failure: NotRequired[str]
