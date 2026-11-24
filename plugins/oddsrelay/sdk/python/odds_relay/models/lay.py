from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .unions.price import Price, PriceDict


class Lay(SdkBaseModel):
    exchange: str
    price: Price | None
    available: float | None
    """Money available at that lay price."""

    places: OptionalNullable[int] = UNSET
    """``lay.place`` only: the place market's places."""

    link: str | None


class LayDict(TypedDict):
    exchange: str
    price: PriceDict | None
    available: float | None
    places: NotRequired[int | None]
    link: str | None
