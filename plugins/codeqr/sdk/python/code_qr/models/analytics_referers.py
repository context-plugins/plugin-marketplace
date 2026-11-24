from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsReferers(SdkBaseModel):
    referer: str
    """The name of the referer. If unknown, this will be ``(direct)``"""

    clicks: float = 0.0
    """The number of clicks from this referer"""

    leads: float = 0.0
    """The number of leads from this referer"""

    sales: float = 0.0
    """The number of sales from this referer"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this referer, in cents"""


class AnalyticsReferersDict(TypedDict):
    referer: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
