from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DevCountryAggregate(SdkBaseModel):
    hq_country: str
    """Country of the developer's registered address as disclosed on the store listing (ISO 3166-1 alpha-2). May differ
    from where the company actually operates."""

    developers: int
    """Number of developers with this HQ country"""

    published_apps: int
    """Sum of published apps across those developers"""

    downloads: int
    """Sum of monthly downloads estimates across those developers"""

    revenue: int
    """Sum of monthly revenue estimates across those developers, USD"""


class DevCountryAggregateDict(TypedDict):
    hq_country: str
    developers: int
    published_apps: int
    downloads: int
    revenue: int
