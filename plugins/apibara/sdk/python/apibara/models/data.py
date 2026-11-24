from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.auction import AuctionOrStr


class Data(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    make: Optional[str] = UNSET
    model: OptionalNullable[str] = UNSET
    year: OptionalNullable[int] = UNSET
    damage: OptionalNullable[str] = UNSET
    auction: OptionalNullable[AuctionOrStr] = UNSET
    records_count: Optional[int] = UNSET
    average_sold_price: OptionalNullable[float] = UNSET
    min_sold_price: OptionalNullable[float] = UNSET
    max_sold_price: OptionalNullable[float] = UNSET
    currency: Optional[str] = UNSET
    p25_sold_price: OptionalNullable[float] = UNSET
    median_sold_price: OptionalNullable[float] = UNSET
    p75_sold_price: OptionalNullable[float] = UNSET


class DataDict(TypedDict):
    make: NotRequired[str]
    model: NotRequired[str | None]
    year: NotRequired[int | None]
    damage: NotRequired[str | None]
    auction: NotRequired[AuctionOrStr | None]
    records_count: NotRequired[int]
    average_sold_price: NotRequired[float | None]
    min_sold_price: NotRequired[float | None]
    max_sold_price: NotRequired[float | None]
    currency: NotRequired[str]
    p25_sold_price: NotRequired[float | None]
    median_sold_price: NotRequired[float | None]
    p75_sold_price: NotRequired[float | None]
