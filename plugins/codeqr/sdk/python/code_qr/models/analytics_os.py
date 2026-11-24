from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsOs(SdkBaseModel):
    os: str
    """The name of the OS"""

    clicks: float = 0.0
    """The number of clicks from this OS"""

    leads: float = 0.0
    """The number of leads from this OS"""

    sales: float = 0.0
    """The number of sales from this OS"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this OS, in cents"""


class AnalyticsOsDict(TypedDict):
    os: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
