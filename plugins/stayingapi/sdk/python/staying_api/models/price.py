from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.platform import PlatformOrStr
from .fees import Fees, FeesDict
from .occupancy import Occupancy, OccupancyDict


class Price(SdkBaseModel):
    platform: PlatformOrStr
    listing_id: str = Field(alias="listingId")
    currency: str
    nightly_price: float = Field(alias="nightlyPrice")
    total_price: float = Field(alias="totalPrice")
    fees: Fees
    nights: int
    occupancy: Occupancy
    source: str
    url: str


class PriceDict(TypedDict):
    platform: PlatformOrStr
    listing_id: str
    currency: str
    nightly_price: float
    total_price: float
    fees: FeesDict
    nights: int
    occupancy: OccupancyDict
    source: str
    url: str
