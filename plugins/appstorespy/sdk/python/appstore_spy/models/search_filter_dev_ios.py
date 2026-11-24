from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.ios_category import IosCategoryOrStr
from .enums.type_enum import TypeEnumOrStr
from .value_range import ValueRange, ValueRangeDict


class SearchFilterDevIos(SdkBaseModel):
    hq_country: Optional[list[str]] = UNSET
    """One or more country codes. Country of the developer's registered address as disclosed on the store listing (ISO
    3166-1 alpha-2). May differ from where the company actually operates."""

    type_: Optional[TypeEnumOrStr] = Field(default=UNSET, alias="type")
    """Dominant category type of the developer's apps"""

    revenue: Optional[ValueRange] = UNSET
    """Monthly revenue estimate range, USD"""

    downloads: Optional[ValueRange] = UNSET
    """Monthly downloads estimate range"""

    total_apps: Optional[ValueRange] = UNSET
    """Total apps count range"""

    am_publisher_id: Optional[list[str]] = UNSET
    """One or more publisher ids. Unified cross-store publisher id; the same value appears on the iOS and Play developer
    accounts of one company. Null when no mapping is known."""

    st_publisher_id: Optional[list[str]] = UNSET
    """One or more publisher ids. Store-specific publisher id from the download-estimates provider. Null when no mapping
    is known."""

    category: Optional[IosCategoryOrStr] = UNSET
    """Dominant category of the developer's apps"""

    seller_name: Optional[list[str]] = UNSET
    """One or more exact App Store seller legal names. Matches accounts whose seller field contains any of the given
    values."""


class SearchFilterDevIosDict(TypedDict):
    hq_country: NotRequired[list[str]]
    type_: NotRequired[TypeEnumOrStr]
    revenue: NotRequired[ValueRangeDict]
    downloads: NotRequired[ValueRangeDict]
    total_apps: NotRequired[ValueRangeDict]
    am_publisher_id: NotRequired[list[str]]
    st_publisher_id: NotRequired[list[str]]
    category: NotRequired[IosCategoryOrStr]
    seller_name: NotRequired[list[str]]
