from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class DataApibaraCopartIaaiVehicleAuctionApi(SdkBaseModel):
    platform: Optional[str] = UNSET
    lot_number: Optional[str] = UNSET
    vin: OptionalNullable[str] = UNSET
    seller_reserve: Optional[Any] = UNSET
    events: OptionalNullable[list[Any]] = UNSET


class DataApibaraCopartIaaiVehicleAuctionApiDict(TypedDict):
    platform: NotRequired[str]
    lot_number: NotRequired[str]
    vin: NotRequired[str | None]
    seller_reserve: NotRequired[Any]
    events: NotRequired[list[Any] | None]
