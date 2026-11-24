from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IosDev(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    seller_name: Optional[list[str]] = UNSET
    """Distinct seller legal names from the App Store seller field, aggregated across the account's apps. Usually a
    single value; multiple values occur for transferred or renamed accounts. Populated for company accounts; null/absent
    for individual accounts."""

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


class IosDevDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    seller_name: NotRequired[list[str]]
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
