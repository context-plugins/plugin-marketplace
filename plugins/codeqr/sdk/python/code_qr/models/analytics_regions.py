from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.country1 import Country1OrStr


class AnalyticsRegions(SdkBaseModel):
    country: Country1OrStr
    """The 2-letter ISO 3166-1 alpha-2 country code of the region."""

    region: str
    """The 2-letter ISO 3166-2 region code representing the region associated with the location of the user."""

    city: Literal["*"] = "*"
    clicks: float = 0.0
    """The number of clicks from this region"""

    leads: float = 0.0
    """The number of leads from this region"""

    sales: float = 0.0
    """The number of sales from this region"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this region, in cents"""


class AnalyticsRegionsDict(TypedDict):
    country: Country1OrStr
    region: str
    city: Literal["*"]
    clicks: float
    leads: float
    sales: float
    sale_amount: float
