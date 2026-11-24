from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .increment import Increment, IncrementDict


class ApiV1CallPriceResponse(SdkBaseModel):
    destination_name: str | None
    """Destination as listed in your price list; null for an exact price only"""

    price: float
    """Price per minute in USD"""

    increment: Increment


class ApiV1CallPriceResponseDict(TypedDict):
    destination_name: str | None
    price: float
    increment: IncrementDict
