from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shipping_price import ShippingPrice, ShippingPriceDict


class ShippingResponse(SdkBaseModel):
    data: Optional[list[ShippingPrice]] = UNSET


class ShippingResponseDict(TypedDict):
    data: NotRequired[list[ShippingPriceDict]]
