from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .enums.platform import PlatformOrStr
from .unions.lot_number import LotNumber, LotNumberDict


class IncludedVehicleHistoryItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    platform: Optional[PlatformOrStr] = UNSET
    lot_number: OptionalNullable[LotNumber] = UNSET
    date: OptionalNullable[Date] = UNSET
    price: OptionalNullable[float] = UNSET
    status: OptionalNullable[str] = UNSET


class IncludedVehicleHistoryItemDict(TypedDict):
    platform: NotRequired[PlatformOrStr]
    lot_number: NotRequired[LotNumberDict | None]
    date: NotRequired[Date | None]
    price: NotRequired[float | None]
    status: NotRequired[str | None]
