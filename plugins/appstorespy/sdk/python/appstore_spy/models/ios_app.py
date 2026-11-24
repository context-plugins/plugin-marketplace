from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .creatives import Creatives, CreativesDict


class IosApp(SdkBaseModel):
    id: Optional[str] = UNSET
    """App ID"""

    bundle: Optional[str] = UNSET
    """App bundle"""

    country: Optional[str] = UNSET
    """Requested country"""

    lang: Optional[str] = UNSET
    """Requested language"""

    published: Optional[bool] = UNSET
    """Published"""

    available: Optional[bool] = UNSET
    """Availability in the specified country"""

    available_in: Optional[list[Any]] = UNSET
    """Available in countries"""

    available_not: Optional[list[Any]] = UNSET
    """Not available in countries"""

    category: Optional[list[str]] = UNSET
    """App category."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """App type - APP | GAME"""

    emails: Optional[list[str]] = UNSET
    """App's developer email"""

    website: Optional[str] = UNSET
    """App's website"""

    url: Optional[str] = UNSET
    """Link to App Store"""

    privacy_policy: Optional[str] = UNSET
    """..."""

    version: Optional[str] = UNSET
    """App version."""

    released: Optional[str] = UNSET
    """Date of release - YYYY-MM-DD"""

    updated: Optional[str] = UNSET
    """Date of update - YYYY-MM-DD"""

    size: Optional[int] = UNSET
    """App's size in bytes."""

    iap: Optional[bool] = UNSET
    """Inapp advertisement"""

    developer_id: Optional[str] = UNSET
    """App's developer ID"""

    developer_name: Optional[str] = UNSET
    """Developer name"""

    rating_count: Optional[int] = UNSET
    """Number of ratings"""

    rating_value: Optional[float] = UNSET
    """Rating value in requested country"""

    rating_avg: Optional[float] = UNSET
    """Weighted average Rating value"""

    revenue: Optional[int] = UNSET
    downloads: Optional[int] = UNSET
    devices: Optional[list[Any]] = UNSET
    """App's devices list"""

    arcade: Optional[bool] = UNSET
    name: Optional[str] = UNSET
    """App's name on requested language"""

    short: Optional[str] = UNSET
    """App's short description on requested language"""

    whatsnew: Optional[str] = UNSET
    """App's new version changes on requested language"""

    description: Optional[str] = UNSET
    """App's full description on requested language"""

    icon: Optional[str] = UNSET
    """App's image"""

    trailer: Optional[str] = UNSET
    """App's trailer"""

    languages: Optional[list[Any]] = UNSET
    """App's languages list"""

    crawled: Optional[str] = UNSET
    """Last crawled date"""

    removed: str = ""
    """Date of remove app"""

    age: Optional[int] = UNSET
    """How long does the application exist in days"""

    screenshots: Optional[list[str]] = UNSET
    """Screenshots in the specified language"""

    screenshots_duo_inner: Optional[list[str]] = UNSET
    """iPhone Duo inner display screenshots in the specified language, null when the app has none"""

    screenshots_duo_outer: Optional[list[str]] = UNSET
    """iPhone Duo outer display screenshots in the specified language, null when the app has none"""

    top_countries_revenue: Optional[list[str]] = UNSET
    """Top 5 revenue country"""

    top_countries_downloads: Optional[list[str]] = UNSET
    """Top 5 downloads country"""

    countries_list: Optional[list[str]] = UNSET
    """countries"""

    url_appstorespy: Optional[str] = UNSET
    """Url to AppstoreSpy"""

    ads: Optional[Creatives] = UNSET
    """App`s ads"""

    advertised: Optional[bool] = UNSET
    """App is advertised in networks"""

    transferred: Optional[str] = UNSET
    """The last transfer date as detected by AppstoreSpy"""

    previous_developer_id: Optional[str] = UNSET
    """Previous developer ID before transfer"""

    previous_developer_name: Optional[str] = UNSET
    """Previous developer name before transfer"""

    copyright: Optional[str] = UNSET
    """Copyright"""

    seller: Optional[str] = UNSET
    """Seller"""


class IosAppDict(TypedDict):
    id: NotRequired[str]
    bundle: NotRequired[str]
    country: NotRequired[str]
    lang: NotRequired[str]
    published: NotRequired[bool]
    available: NotRequired[bool]
    available_in: NotRequired[list[Any]]
    available_not: NotRequired[list[Any]]
    category: NotRequired[list[str]]
    type_: NotRequired[str]
    emails: NotRequired[list[str]]
    website: NotRequired[str]
    url: NotRequired[str]
    privacy_policy: NotRequired[str]
    version: NotRequired[str]
    released: NotRequired[str]
    updated: NotRequired[str]
    size: NotRequired[int]
    iap: NotRequired[bool]
    developer_id: NotRequired[str]
    developer_name: NotRequired[str]
    rating_count: NotRequired[int]
    rating_value: NotRequired[float]
    rating_avg: NotRequired[float]
    revenue: NotRequired[int]
    downloads: NotRequired[int]
    devices: NotRequired[list[Any]]
    arcade: NotRequired[bool]
    name: NotRequired[str]
    short: NotRequired[str]
    whatsnew: NotRequired[str]
    description: NotRequired[str]
    icon: NotRequired[str]
    trailer: NotRequired[str]
    languages: NotRequired[list[Any]]
    crawled: NotRequired[str]
    removed: NotRequired[str]
    age: NotRequired[int]
    screenshots: NotRequired[list[str]]
    screenshots_duo_inner: NotRequired[list[str]]
    screenshots_duo_outer: NotRequired[list[str]]
    top_countries_revenue: NotRequired[list[str]]
    top_countries_downloads: NotRequired[list[str]]
    countries_list: NotRequired[list[str]]
    url_appstorespy: NotRequired[str]
    ads: NotRequired[CreativesDict]
    advertised: NotRequired[bool]
    transferred: NotRequired[str]
    previous_developer_id: NotRequired[str]
    previous_developer_name: NotRequired[str]
    copyright: NotRequired[str]
    seller: NotRequired[str]
