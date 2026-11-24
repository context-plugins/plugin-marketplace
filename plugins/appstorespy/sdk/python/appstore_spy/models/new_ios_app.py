from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .creatives import Creatives, CreativesDict
from .ios_chart import IosChart, IosChartDict


class NewIosApp(SdkBaseModel):
    id: Optional[str] = UNSET
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
    screenshots_duo_inner: Optional[list[str]] = UNSET
    """iPhone Duo inner display screenshots in the specified language, null when the app has none"""

    screenshots_duo_outer: Optional[list[str]] = UNSET
    """iPhone Duo outer display screenshots in the specified language, null when the app has none"""

    removal_date: Optional[Date] = UNSET
    version: Optional[str] = UNSET
    size: Optional[float] = UNSET
    rating_count: Optional[int] = UNSET
    rating_value: Optional[float] = UNSET
    review_count: Optional[int] = UNSET
    rating_avg: Optional[float] = UNSET
    iap: Optional[bool] = UNSET
    chart_info: Optional[IosChart] = UNSET
    url_appstorespy: Optional[str] = UNSET
    """Url to AppstoreSpy"""

    email: Optional[list[str]] = UNSET
    """App's developer email"""

    url: Optional[str] = UNSET
    """Link to App Store"""

    policy: Optional[str] = UNSET
    """..."""

    website: Optional[str] = UNSET
    """App's website"""

    hosts: Optional[list[str]] = UNSET
    """App's developer hosts"""

    support: Optional[str] = UNSET
    """..."""

    developer_id: Optional[str] = UNSET
    ads: Optional[Creatives] = UNSET
    """App`s ads"""

    advertised: Optional[bool] = UNSET
    """App is advertised in networks"""

    copyright: Optional[str] = UNSET
    """Copyright"""

    seller: Optional[str] = UNSET
    """Seller"""

    transferred: Optional[str] = UNSET
    """The last transfer date as detected by AppstoreSpy"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""


class NewIosAppDict(TypedDict):
    id: NotRequired[str]
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
    screenshots_duo_inner: NotRequired[list[str]]
    screenshots_duo_outer: NotRequired[list[str]]
    removal_date: NotRequired[Date]
    version: NotRequired[str]
    size: NotRequired[float]
    rating_count: NotRequired[int]
    rating_value: NotRequired[float]
    review_count: NotRequired[int]
    rating_avg: NotRequired[float]
    iap: NotRequired[bool]
    chart_info: NotRequired[IosChartDict]
    url_appstorespy: NotRequired[str]
    email: NotRequired[list[str]]
    url: NotRequired[str]
    policy: NotRequired[str]
    website: NotRequired[str]
    hosts: NotRequired[list[str]]
    support: NotRequired[str]
    developer_id: NotRequired[str]
    ads: NotRequired[CreativesDict]
    advertised: NotRequired[bool]
    copyright: NotRequired[str]
    seller: NotRequired[str]
    transferred: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
