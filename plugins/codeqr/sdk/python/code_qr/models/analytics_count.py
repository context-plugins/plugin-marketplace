from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsCount(SdkBaseModel):
    clicks: float = 0.0
    """The total number of clicks"""

    scans: float = 0.0
    """The total number of scans"""

    views: float = 0.0
    """The total number of views"""

    leads: float = 0.0
    """The total number of leads"""

    sales: float = 0.0
    """The total number of sales"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales, in cents"""


class AnalyticsCountDict(TypedDict):
    clicks: float
    scans: float
    views: float
    leads: float
    sales: float
    sale_amount: float
