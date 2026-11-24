from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsTimeseries(SdkBaseModel):
    start: str
    """The starting timestamp of the interval"""

    clicks: float = 0.0
    """The number of clicks in the interval"""

    scans: float = 0.0
    """The number of scans in the interval"""

    views: float = 0.0
    """The number of views in the interval"""

    leads: float = 0.0
    """The number of leads in the interval"""

    sales: float = 0.0
    """The number of sales in the interval"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales in the interval, in cents"""


class AnalyticsTimeseriesDict(TypedDict):
    start: str
    clicks: float
    scans: float
    views: float
    leads: float
    sales: float
    sale_amount: float
