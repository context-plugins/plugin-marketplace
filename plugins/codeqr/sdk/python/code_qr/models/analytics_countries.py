from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.country2 import Country2OrStr


class AnalyticsCountries(SdkBaseModel):
    country: Country2OrStr
    """The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more:
    https://codeqr.io/geo"""

    city: Literal["*"] = "*"
    clicks: float = 0.0
    """The number of clicks from this country"""

    leads: float = 0.0
    """The number of leads from this country"""

    sales: float = 0.0
    """The number of sales from this country"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this country, in cents"""


class AnalyticsCountriesDict(TypedDict):
    country: Country2OrStr
    city: Literal["*"]
    clicks: float
    leads: float
    sales: float
    sale_amount: float
