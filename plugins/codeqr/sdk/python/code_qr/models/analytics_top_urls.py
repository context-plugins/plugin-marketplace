from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsTopUrls(SdkBaseModel):
    url: str
    """The destination URL"""

    clicks: float = 0.0
    """The number of clicks from this URL"""

    leads: float = 0.0
    """The number of leads from this URL"""

    sales: float = 0.0
    """The number of sales from this URL"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this URL, in cents"""


class AnalyticsTopUrlsDict(TypedDict):
    url: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
