from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .chart_filter_ios import ChartFilterIos, ChartFilterIosDict
from .date_range import DateRange, DateRangeDict
from .enums.ios_category import IosCategoryOrStr
from .enums.type_enum import TypeEnumOrStr
from .value_range import ValueRange, ValueRangeDict


class SearchFilterIos(SdkBaseModel):
    id: Optional[list[str]] = UNSET
    name: Optional[str] = UNSET
    published: Optional[bool] = UNSET
    category_type: Optional[TypeEnumOrStr] = UNSET
    """An enumeration."""

    revenue_month: Optional[ValueRange] = UNSET
    downloads_month: Optional[ValueRange] = UNSET
    release_date: Optional[DateRange] = UNSET
    update_date: Optional[DateRange] = UNSET
    rating_count: Optional[ValueRange] = UNSET
    developer: Optional[str] = UNSET
    developer_id: Optional[str] = UNSET
    editorial: Optional[bool] = UNSET
    iap: Optional[bool] = UNSET
    """In app purchases"""

    active_countries: Optional[list[str]] = UNSET
    description_full: Optional[str] = UNSET
    description_short: Optional[str] = UNSET
    whatsnew: Optional[str] = UNSET
    """Updates in app"""

    hosts: Optional[str] = UNSET
    with_ads: Optional[bool] = UNSET
    advertised: Optional[bool] = UNSET
    collection_id: Optional[str] = UNSET
    """Collection ID"""

    discovered: Optional[list[Date]] = UNSET
    website: Optional[str] = UNSET
    """Website"""

    bundle: Optional[list[str]] = UNSET
    """App bundle ID(s); accepts a single string or a list"""

    transferred: Optional[bool] = UNSET
    """Whether the app has been transferred to a new developer at least once"""

    transfer_date: Optional[DateRange] = UNSET
    """Date range (gte/lte) of the last developer transfer"""

    removal_date: Optional[DateRange] = UNSET
    """Date range (gte/lte) of app removal from the store; matches removed (unavailable) apps"""

    category: Optional[IosCategoryOrStr] = UNSET
    """An enumeration."""

    chart_filter: Optional[ChartFilterIos] = UNSET
    developer_name: Optional[str] = UNSET
    rating_avg: Optional[ValueRange] = UNSET
    review_count: Optional[ValueRange] = UNSET
    copyright: Optional[str] = UNSET
    seller: Optional[str] = UNSET
    similar_apps: Optional[str] = UNSET
    """Similars apps"""

    reverse_similar_apps: Optional[str] = UNSET
    """Apps with app in similar`s lists"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""

    pre_order: Optional[bool] = UNSET
    """Pre-order apps only (True); matches apps whose release date is still in the future"""


class SearchFilterIosDict(TypedDict):
    id: NotRequired[list[str]]
    name: NotRequired[str]
    published: NotRequired[bool]
    category_type: NotRequired[TypeEnumOrStr]
    revenue_month: NotRequired[ValueRangeDict]
    downloads_month: NotRequired[ValueRangeDict]
    release_date: NotRequired[DateRangeDict]
    update_date: NotRequired[DateRangeDict]
    rating_count: NotRequired[ValueRangeDict]
    developer: NotRequired[str]
    developer_id: NotRequired[str]
    editorial: NotRequired[bool]
    iap: NotRequired[bool]
    active_countries: NotRequired[list[str]]
    description_full: NotRequired[str]
    description_short: NotRequired[str]
    whatsnew: NotRequired[str]
    hosts: NotRequired[str]
    with_ads: NotRequired[bool]
    advertised: NotRequired[bool]
    collection_id: NotRequired[str]
    discovered: NotRequired[list[Date]]
    website: NotRequired[str]
    bundle: NotRequired[list[str]]
    transferred: NotRequired[bool]
    transfer_date: NotRequired[DateRangeDict]
    removal_date: NotRequired[DateRangeDict]
    category: NotRequired[IosCategoryOrStr]
    chart_filter: NotRequired[ChartFilterIosDict]
    developer_name: NotRequired[str]
    rating_avg: NotRequired[ValueRangeDict]
    review_count: NotRequired[ValueRangeDict]
    copyright: NotRequired[str]
    seller: NotRequired[str]
    similar_apps: NotRequired[str]
    reverse_similar_apps: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
    pre_order: NotRequired[bool]
