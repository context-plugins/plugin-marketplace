from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ShippingPrice(SdkBaseModel):
    min: str
    max: str | None
    currency: str


class ShippingPriceDict(TypedDict):
    min: str
    max: str | None
    currency: str
