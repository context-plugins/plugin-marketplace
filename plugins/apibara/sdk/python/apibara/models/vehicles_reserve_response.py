from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_apibara_copart_iaai_vehicle_auction_api import (
    DataApibaraCopartIaaiVehicleAuctionApi,
    DataApibaraCopartIaaiVehicleAuctionApiDict,
)


class VehiclesReserveResponse(SdkBaseModel):
    ok: Optional[bool] = UNSET
    data: Optional[DataApibaraCopartIaaiVehicleAuctionApi] = UNSET


class VehiclesReserveResponseDict(TypedDict):
    ok: NotRequired[bool]
    data: NotRequired[DataApibaraCopartIaaiVehicleAuctionApiDict]
