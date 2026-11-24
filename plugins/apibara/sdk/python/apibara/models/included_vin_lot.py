from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .auction_info import AuctionInfo, AuctionInfoDict
from .pricing_info import PricingInfo, PricingInfoDict
from .unions.lot_number import LotNumber, LotNumberDict


class IncludedVinLot(SdkBaseModel):
    """Summary-form auction lot for the same VIN. Field availability depends on source and lot state."""

    platform: Optional[str] = UNSET
    lot_number: OptionalNullable[LotNumber] = UNSET
    vin: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    year: OptionalNullable[int] = UNSET
    make: OptionalNullable[str] = UNSET
    model: OptionalNullable[str] = UNSET
    auction: Optional[AuctionInfo] = UNSET
    pricing: Optional[PricingInfo] = UNSET


class IncludedVinLotDict(TypedDict):
    platform: NotRequired[str]
    lot_number: NotRequired[LotNumberDict | None]
    vin: NotRequired[str | None]
    title: NotRequired[str | None]
    year: NotRequired[int | None]
    make: NotRequired[str | None]
    model: NotRequired[str | None]
    auction: NotRequired[AuctionInfoDict]
    pricing: NotRequired[PricingInfoDict]
