from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.price import Price, PriceDict


class Back(SdkBaseModel):
    bookmaker: str | None
    """Venue key (``/v2/bookmakers``)."""

    price: Price | None
    link: str | None
    """The venue's page for this event."""

    places: OptionalNullable[int] = UNSET
    """``each-way``, ``extra-place``: places paid."""

    place_fraction: OptionalNullable[float] = UNSET
    """``each-way``, ``extra-place``: the place terms as a fraction."""

    dutch_id: Optional[str] = UNSET
    """``dutching`` only: 8 hex naming the dutch this leg belongs to. Group one market's offers by it and rate a dutch
    as 100 / sum(1/price)."""


class BackDict(TypedDict):
    bookmaker: str | None
    price: PriceDict | None
    link: str | None
    places: NotRequired[int | None]
    place_fraction: NotRequired[float | None]
    dutch_id: NotRequired[str]
