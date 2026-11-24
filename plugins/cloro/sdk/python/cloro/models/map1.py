from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Map1(SdkBaseModel):
    id: Optional[str] = UNSET
    """Business ID (Yelp ID or Google Place ID)"""

    provider: Optional[str] = UNSET
    """Data provider: "yelp", "b1"/"b3" (Google), or "yelp-feed"
    """

    name: Optional[str] = UNSET
    """Business name"""

    position: Optional[int] = UNSET
    """Position/ranking in results (added by parser)"""

    address: Optional[str] = UNSET
    """Full street address"""

    latitude: Optional[float] = UNSET
    """GPS latitude coordinate"""

    longitude: Optional[float] = UNSET
    """GPS longitude coordinate"""

    categories: Optional[list[str]] = UNSET
    """Business categories"""

    rating: Optional[float] = UNSET
    """Business rating (0-5 scale)"""

    review_count: Optional[int] = Field(default=UNSET, alias="reviewCount")
    """Number of reviews"""

    description: Optional[str] = UNSET
    """Business description"""

    phone: Optional[str] = UNSET
    """Contact phone number"""

    website_url: Optional[str] = Field(default=UNSET, alias="websiteUrl")
    """Business website URL"""


class Map1Dict(TypedDict):
    id: NotRequired[str]
    provider: NotRequired[str]
    name: NotRequired[str]
    position: NotRequired[int]
    address: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
    categories: NotRequired[list[str]]
    rating: NotRequired[float]
    review_count: NotRequired[int]
    description: NotRequired[str]
    phone: NotRequired[str]
    website_url: NotRequired[str]
