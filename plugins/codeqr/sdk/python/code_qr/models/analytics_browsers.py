from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsBrowsers(SdkBaseModel):
    browser: str
    """The name of the browser"""

    clicks: float = 0.0
    """The number of clicks from this browser"""

    leads: float = 0.0
    """The number of leads from this browser"""

    sales: float = 0.0
    """The number of sales from this browser"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this browser, in cents"""


class AnalyticsBrowsersDict(TypedDict):
    browser: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
