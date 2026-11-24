from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .creatives import Creatives, CreativesDict
from .play_chart import PlayChart, PlayChartDict


class NewPlayApp(SdkBaseModel):
    id: str
    country: str
    language: str
    bundle: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description_full: Optional[str] = UNSET
    published: Optional[bool] = UNSET
    listing_visible: Optional[bool] = UNSET
    category: Optional[str] = UNSET
    category_type: Optional[str] = UNSET
    revenue_month: Optional[int] = UNSET
    revenue_lifetime: Optional[int] = UNSET
    downloads_month: Optional[int] = UNSET
    downloads_lifetime: Optional[int] = UNSET
    release_date: Optional[Date] = UNSET
    update_date: Optional[Date] = UNSET
    developer_name: Optional[str] = UNSET
    description_short: Optional[str] = UNSET
    whatsnew: Optional[str] = UNSET
    icon: Optional[str] = UNSET
    video: Optional[str] = UNSET
    screenshots: Optional[list[str]] = UNSET
    feature_graphic: Optional[str] = UNSET
    removal_date: Optional[Date] = UNSET
    version: Optional[str] = UNSET
    size: Optional[float] = UNSET
    downloads_daily: Optional[int] = UNSET
    downloads_exact: Optional[int] = UNSET
    downloads_mark: Optional[int] = UNSET
    rating_count: Optional[int] = UNSET
    rating_value: Optional[float] = UNSET
    review_count: Optional[int] = UNSET
    rating_avg: Optional[float] = UNSET
    iap: Optional[bool] = UNSET
    editorial: Optional[bool] = UNSET
    chart_info: Optional[PlayChart] = UNSET
    hosts: Optional[list[str]] = UNSET
    url_appstorespy: Optional[str] = UNSET
    """Url to AppstoreSpy"""

    ipd: Optional[int] = UNSET
    """Estimated daily installs"""

    email: Optional[list[str]] = UNSET
    """App's developer email"""

    url: Optional[str] = UNSET
    """Link to App Store"""

    policy: Optional[str] = UNSET
    """..."""

    website: Optional[str] = UNSET
    """App website"""

    developer_id: Optional[str] = UNSET
    ads: Optional[Creatives] = UNSET
    """App`s ads"""

    advertised: Optional[bool] = UNSET
    """App is advertised in networks"""

    about_phone: Optional[str] = UNSET
    """About developer: phone number"""

    about_address: Optional[str] = UNSET
    """About developer: address"""

    address_country: Optional[str] = UNSET
    """Address: country"""

    support_phone: Optional[str] = UNSET
    """App support: phone number"""

    transferred: Optional[str] = UNSET
    """The last transfer date as detected by AppstoreSpy"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""


class NewPlayAppDict(TypedDict):
    id: str
    country: str
    language: str
    bundle: NotRequired[str]
    name: NotRequired[str]
    description_full: NotRequired[str]
    published: NotRequired[bool]
    listing_visible: NotRequired[bool]
    category: NotRequired[str]
    category_type: NotRequired[str]
    revenue_month: NotRequired[int]
    revenue_lifetime: NotRequired[int]
    downloads_month: NotRequired[int]
    downloads_lifetime: NotRequired[int]
    release_date: NotRequired[Date]
    update_date: NotRequired[Date]
    developer_name: NotRequired[str]
    description_short: NotRequired[str]
    whatsnew: NotRequired[str]
    icon: NotRequired[str]
    video: NotRequired[str]
    screenshots: NotRequired[list[str]]
    feature_graphic: NotRequired[str]
    removal_date: NotRequired[Date]
    version: NotRequired[str]
    size: NotRequired[float]
    downloads_daily: NotRequired[int]
    downloads_exact: NotRequired[int]
    downloads_mark: NotRequired[int]
    rating_count: NotRequired[int]
    rating_value: NotRequired[float]
    review_count: NotRequired[int]
    rating_avg: NotRequired[float]
    iap: NotRequired[bool]
    editorial: NotRequired[bool]
    chart_info: NotRequired[PlayChartDict]
    hosts: NotRequired[list[str]]
    url_appstorespy: NotRequired[str]
    ipd: NotRequired[int]
    email: NotRequired[list[str]]
    url: NotRequired[str]
    policy: NotRequired[str]
    website: NotRequired[str]
    developer_id: NotRequired[str]
    ads: NotRequired[CreativesDict]
    advertised: NotRequired[bool]
    about_phone: NotRequired[str]
    about_address: NotRequired[str]
    address_country: NotRequired[str]
    support_phone: NotRequired[str]
    transferred: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
