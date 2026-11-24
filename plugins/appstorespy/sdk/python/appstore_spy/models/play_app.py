from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .creatives import Creatives, CreativesDict


class PlayApp(SdkBaseModel):
    id: Optional[str] = UNSET
    """The app package name"""

    bundle: Optional[str] = UNSET
    """Bundle(the same as id)"""

    published: Optional[bool] = UNSET
    """Published"""

    available_in: Optional[list[Any]] = UNSET
    """Available in countries"""

    available_not: Optional[list[Any]] = UNSET
    """Not available in countries"""

    country: Optional[str] = UNSET
    """Country for which specific fields returned"""

    lang: Optional[str] = UNSET
    """The language in which the app metadata is returned"""

    languages: Optional[list[Any]] = UNSET
    """Translations detected by AppstoreSpy"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Category type: app or game"""

    category: Optional[str] = UNSET
    """Category ID. Refer to the Google Play categories for more information"""

    name: Optional[str] = UNSET
    """Name in the specified language"""

    short: Optional[str] = UNSET
    """Short description in the specified language"""

    description: Optional[str] = UNSET
    """Description in the specified language"""

    icon: Optional[str] = UNSET
    """Icon in the specified language"""

    screenshots: Optional[list[str]] = UNSET
    """Screenshots in the specified language"""

    trailer: Optional[str] = UNSET
    """Video trailer Youtube link in the specified language"""

    feature: Optional[str] = UNSET
    """Feature in the specified language"""

    whatsnew: Optional[str] = UNSET
    """What's new in the specified language"""

    developer_id: Optional[str] = UNSET
    """Developer ID"""

    developer_name: Optional[str] = UNSET
    """Developer name"""

    emails: Optional[list[str]] = UNSET
    """Contact email"""

    website: Optional[str] = UNSET
    """Website"""

    privacy_policy: Optional[str] = UNSET
    """Privacy policy link"""

    url: Optional[str] = UNSET
    """Link to Google Play"""

    editorial: Optional[bool] = UNSET
    """Editor's choice"""

    iap: Optional[bool] = UNSET
    """App offers in-app purchases"""

    ads: Optional[Creatives] = UNSET
    """App`s ads"""

    advertised: Optional[bool] = UNSET
    """App is advertised in networks"""

    installs: Optional[str] = UNSET
    """Installs checkpoint"""

    installs_exact: Optional[int] = UNSET
    """Accurate installs value"""

    ipd: Optional[int] = UNSET
    """Estimated daily installs"""

    rating_count: Optional[int] = UNSET
    """Total ratings"""

    rating_value: Optional[float] = UNSET
    """Rating value in the specified country"""

    review_count: Optional[int] = UNSET
    """Number of reviews in the specified country"""

    rating_avg: Optional[float] = UNSET
    """Weighted average Rating value"""

    review_total: Optional[float] = UNSET
    """Total reviews as detected by AppstoreSpy"""

    revenue: Optional[int] = UNSET
    downloads: Optional[int] = UNSET
    version: Optional[str] = UNSET
    """App version, optional if app has multiple versions"""

    size: Optional[int] = UNSET
    """App size in bytes, optional if app has multiple versions"""

    updated: Optional[str] = UNSET
    """The last time the app was updated on Google Play"""

    released: Optional[str] = UNSET
    """The release date as detected by AppstoreSpy"""

    age: Optional[int] = UNSET
    """Age in days as detected by AppstoreSpy"""

    removed: Optional[str] = UNSET
    """The removal date as detected by AppstoreSpy"""

    crawled: Optional[str] = UNSET
    """The last crawled time by AppstoreSpy"""

    top_countries_revenue: Optional[list[str]] = UNSET
    """Top 5 revenue country"""

    top_countries_downloads: Optional[list[str]] = UNSET
    """Top 5 downloads country"""

    hosts: Optional[list[str]] = UNSET
    """Hosts"""

    countries_list: Optional[list[str]] = UNSET
    """countries"""

    url_appstorespy: Optional[str] = UNSET
    """Url to AppstoreSpy"""

    transferred: Optional[str] = UNSET
    """The last transfer date as detected by AppstoreSpy"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""

    about_phone: Optional[str] = UNSET
    """About developer: phone number"""

    about_address: Optional[str] = UNSET
    """About developer: address"""

    support_phone: Optional[str] = UNSET
    """App support: phone number"""

    address_country: Optional[str] = UNSET
    """Address: country"""


class PlayAppDict(TypedDict):
    id: NotRequired[str]
    bundle: NotRequired[str]
    published: NotRequired[bool]
    available_in: NotRequired[list[Any]]
    available_not: NotRequired[list[Any]]
    country: NotRequired[str]
    lang: NotRequired[str]
    languages: NotRequired[list[Any]]
    type_: NotRequired[str]
    category: NotRequired[str]
    name: NotRequired[str]
    short: NotRequired[str]
    description: NotRequired[str]
    icon: NotRequired[str]
    screenshots: NotRequired[list[str]]
    trailer: NotRequired[str]
    feature: NotRequired[str]
    whatsnew: NotRequired[str]
    developer_id: NotRequired[str]
    developer_name: NotRequired[str]
    emails: NotRequired[list[str]]
    website: NotRequired[str]
    privacy_policy: NotRequired[str]
    url: NotRequired[str]
    editorial: NotRequired[bool]
    iap: NotRequired[bool]
    ads: NotRequired[CreativesDict]
    advertised: NotRequired[bool]
    installs: NotRequired[str]
    installs_exact: NotRequired[int]
    ipd: NotRequired[int]
    rating_count: NotRequired[int]
    rating_value: NotRequired[float]
    review_count: NotRequired[int]
    rating_avg: NotRequired[float]
    review_total: NotRequired[float]
    revenue: NotRequired[int]
    downloads: NotRequired[int]
    version: NotRequired[str]
    size: NotRequired[int]
    updated: NotRequired[str]
    released: NotRequired[str]
    age: NotRequired[int]
    removed: NotRequired[str]
    crawled: NotRequired[str]
    top_countries_revenue: NotRequired[list[str]]
    top_countries_downloads: NotRequired[list[str]]
    hosts: NotRequired[list[str]]
    countries_list: NotRequired[list[str]]
    url_appstorespy: NotRequired[str]
    transferred: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
    about_phone: NotRequired[str]
    about_address: NotRequired[str]
    support_phone: NotRequired[str]
    address_country: NotRequired[str]
