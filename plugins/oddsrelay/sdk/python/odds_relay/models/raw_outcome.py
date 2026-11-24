from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .unions.back_price import BackPrice, BackPriceDict
from .unions.lay_price import LayPrice, LayPriceDict
from .unions.price import Price, PriceDict


class RawOutcome(SdkBaseModel):
    """A bookmaker quote is ``{name, price}``; a venue quoting a lay side is ``{name, back_price, lay_price,
    available}`` (``available`` left out under ``includeLiquidity=false``). No commission is applied."""

    name: str
    price: OptionalNullable[Price] = UNSET
    back_price: OptionalNullable[BackPrice] = UNSET
    lay_price: OptionalNullable[LayPrice] = UNSET
    available: OptionalNullable[float] = UNSET


class RawOutcomeDict(TypedDict):
    name: str
    price: NotRequired[PriceDict | None]
    back_price: NotRequired[BackPriceDict | None]
    lay_price: NotRequired[LayPriceDict | None]
    available: NotRequired[float | None]
