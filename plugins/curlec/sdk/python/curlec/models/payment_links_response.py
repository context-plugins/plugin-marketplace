from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_link import PaymentLink, PaymentLinkDict


class PaymentLinksResponse(SdkBaseModel):
    payment_links: Optional[list[PaymentLink]] = UNSET


class PaymentLinksResponseDict(TypedDict):
    payment_links: NotRequired[list[PaymentLinkDict]]
