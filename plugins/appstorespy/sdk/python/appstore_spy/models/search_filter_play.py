from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .chart_filter_play import ChartFilterPlay, ChartFilterPlayDict
from .date_range import DateRange, DateRangeDict
from .enums.play_category import PlayCategoryOrStr
from .enums.type_enum import TypeEnumOrStr
from .value_range import ValueRange, ValueRangeDict


class SearchFilterPlay(SdkBaseModel):
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
    """Hosts"""

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

    category: Optional[PlayCategoryOrStr] = UNSET
    """Category of app"""

    downloads_mark: Optional[int] = UNSET
    """Installs"""

    downloads_daily: Optional[ValueRange] = UNSET
    """Daily downloads or Daily installs"""

    downloads_exact: Optional[ValueRange] = UNSET
    """Exact installs"""

    installs_exact: Optional[ValueRange] = UNSET
    """Exact installs(deprecated)"""

    review_count: Optional[ValueRange] = UNSET
    """Count of reviews"""

    chart_filter: Optional[ChartFilterPlay] = UNSET
    """Top Charts"""

    similar_apps: Optional[str] = UNSET
    """Similars apps"""

    reverse_similar_apps: Optional[str] = UNSET
    """Apps with app in similar`s lists"""

    rating_avg: Optional[ValueRange] = UNSET
    """Average rating"""

    developer_name: Optional[str] = UNSET
    """Developer name"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""

    pre_register: Optional[bool] = UNSET
    """Pre-registration games only (True); matches apps in the pre-registration state in at least one tracked country"""


class SearchFilterPlayDict(TypedDict):
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
    category: NotRequired[PlayCategoryOrStr]
    downloads_mark: NotRequired[int]
    downloads_daily: NotRequired[ValueRangeDict]
    downloads_exact: NotRequired[ValueRangeDict]
    installs_exact: NotRequired[ValueRangeDict]
    review_count: NotRequired[ValueRangeDict]
    chart_filter: NotRequired[ChartFilterPlayDict]
    similar_apps: NotRequired[str]
    reverse_similar_apps: NotRequired[str]
    rating_avg: NotRequired[ValueRangeDict]
    developer_name: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
    pre_register: NotRequired[bool]
