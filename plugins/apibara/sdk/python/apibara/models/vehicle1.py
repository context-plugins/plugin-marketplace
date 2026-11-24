from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.platform import PlatformOrStr


class Vehicle1(SdkBaseModel):
    id: OptionalNullable[int] = UNSET
    platform: PlatformOrStr
    platform_id: OptionalNullable[int] = UNSET
    lot_number: str
    vin: OptionalNullable[str] = UNSET


class Vehicle1Dict(TypedDict):
    id: NotRequired[int | None]
    platform: PlatformOrStr
    platform_id: NotRequired[int | None]
    lot_number: str
    vin: NotRequired[str | None]
