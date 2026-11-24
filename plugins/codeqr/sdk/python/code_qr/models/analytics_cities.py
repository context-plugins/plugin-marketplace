from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.country import CountryOrStr


class AnalyticsCities(SdkBaseModel):
    city: str
    """The name of the city"""

    country: CountryOrStr
    """The 2-letter country code of the city: https://codeqr.io/geo"""

    clicks: float = 0.0
    """The number of clicks from this city"""

    leads: float = 0.0
    """The number of leads from this city"""

    sales: float = 0.0
    """The number of sales from this city"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this city, in cents"""


class AnalyticsCitiesDict(TypedDict):
    city: str
    country: CountryOrStr
    clicks: float
    leads: float
    sales: float
    sale_amount: float
