from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StripeSubscriptionItem(SdkBaseModel):
    id: str
    price: str
    quantity: float


class StripeSubscriptionItemDict(TypedDict):
    id: str
    price: str
    quantity: float
