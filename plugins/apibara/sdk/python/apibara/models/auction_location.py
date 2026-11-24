from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.platform import PlatformOrStr


class AuctionLocation(SdkBaseModel):
    platform: Optional[PlatformOrStr] = UNSET
    facility_id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    name_desc: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    state_code: OptionalNullable[str] = UNSET
    state_name: OptionalNullable[str] = UNSET
    country_code: OptionalNullable[str] = UNSET
    country_name: OptionalNullable[str] = UNSET
    zip: OptionalNullable[str] = UNSET
    address1: OptionalNullable[str] = UNSET
    address2: OptionalNullable[str] = UNSET
    phone: OptionalNullable[str] = UNSET
    latitude: OptionalNullable[float] = UNSET
    longitude: OptionalNullable[float] = UNSET
    location_url: OptionalNullable[str] = UNSET
    sale_day: OptionalNullable[str] = UNSET
    sale_time: OptionalNullable[str] = UNSET
    time_zone: OptionalNullable[str] = UNSET
    today_auction_count: Optional[int] = UNSET
    distance: OptionalNullable[float] = UNSET


class AuctionLocationDict(TypedDict):
    platform: NotRequired[PlatformOrStr]
    facility_id: NotRequired[int]
    name: NotRequired[str]
    name_desc: NotRequired[str | None]
    city: NotRequired[str | None]
    state_code: NotRequired[str | None]
    state_name: NotRequired[str | None]
    country_code: NotRequired[str | None]
    country_name: NotRequired[str | None]
    zip: NotRequired[str | None]
    address1: NotRequired[str | None]
    address2: NotRequired[str | None]
    phone: NotRequired[str | None]
    latitude: NotRequired[float | None]
    longitude: NotRequired[float | None]
    location_url: NotRequired[str | None]
    sale_day: NotRequired[str | None]
    sale_time: NotRequired[str | None]
    time_zone: NotRequired[str | None]
    today_auction_count: NotRequired[int]
    distance: NotRequired[float | None]
