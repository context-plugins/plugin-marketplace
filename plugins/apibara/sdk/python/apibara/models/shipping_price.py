from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShippingPrice(SdkBaseModel):
    port: Optional[str] = UNSET
    price: Optional[float] = UNSET
    currency: Optional[str] = UNSET


class ShippingPriceDict(TypedDict):
    port: NotRequired[str]
    price: NotRequired[float]
    currency: NotRequired[str]
