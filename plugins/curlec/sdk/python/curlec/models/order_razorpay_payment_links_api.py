from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transfer import Transfer, TransferDict


class OrderRazorpayPaymentLinksApi(SdkBaseModel):
    """Order-level options including offers and transfers."""

    offers: Optional[list[str]] = UNSET
    """Offer IDs to apply. Do not combine with accept_partial."""

    transfers: Optional[list[Transfer]] = UNSET
    """Auto-transfer payments to linked accounts."""


class OrderRazorpayPaymentLinksApiDict(TypedDict):
    offers: NotRequired[list[str]]
    transfers: NotRequired[list[TransferDict]]
