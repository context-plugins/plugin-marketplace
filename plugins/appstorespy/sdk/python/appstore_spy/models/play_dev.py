from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlayDev(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    category: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    total_apps: Optional[int] = UNSET
    published_apps: Optional[int] = UNSET
    last_updated: Optional[str] = UNSET
    first_released: Optional[str] = UNSET
    rating_count: Optional[int] = UNSET
    downloads: Optional[int] = UNSET
    revenue: Optional[int] = UNSET
    top_apps: Optional[list[str]] = UNSET
    hq_country: Optional[str] = UNSET
    """Country of the developer's registered address as disclosed on the store listing (ISO 3166-1 alpha-2). May differ
    from where the company actually operates."""

    am_publisher_id: Optional[str] = UNSET
    """Unified cross-store publisher id; the same value appears on the iOS and Play developer accounts of one company.
    Null when no mapping is known."""

    st_publisher_id: Optional[str] = UNSET
    """Store-specific publisher id from the download-estimates provider. Null when no mapping is known."""

    email: Optional[list[str]] = UNSET
    url: Optional[str] = UNSET
    installs: Optional[int] = UNSET
    installs_exact: Optional[int] = UNSET
    ipd: Optional[int] = UNSET
    ipd_max: Optional[int] = UNSET
    icon: Optional[str] = UNSET
    header: Optional[str] = UNSET
    featured: Optional[str] = UNSET


class PlayDevDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    category: NotRequired[str]
    type_: NotRequired[str]
    total_apps: NotRequired[int]
    published_apps: NotRequired[int]
    last_updated: NotRequired[str]
    first_released: NotRequired[str]
    rating_count: NotRequired[int]
    downloads: NotRequired[int]
    revenue: NotRequired[int]
    top_apps: NotRequired[list[str]]
    hq_country: NotRequired[str]
    am_publisher_id: NotRequired[str]
    st_publisher_id: NotRequired[str]
    email: NotRequired[list[str]]
    url: NotRequired[str]
    installs: NotRequired[int]
    installs_exact: NotRequired[int]
    ipd: NotRequired[int]
    ipd_max: NotRequired[int]
    icon: NotRequired[str]
    header: NotRequired[str]
    featured: NotRequired[str]
