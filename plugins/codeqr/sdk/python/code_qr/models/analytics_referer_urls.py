from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsRefererUrls(SdkBaseModel):
    referer_url: str = Field(alias="refererUrl")
    """The full URL of the referer. If unknown, this will be ``(direct)``"""

    clicks: float = 0.0
    """The number of clicks from this referer to this URL"""

    leads: float = 0.0
    """The number of leads from this referer to this URL"""

    sales: float = 0.0
    """The number of sales from this referer to this URL"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this referer to this URL, in cents"""


class AnalyticsRefererUrlsDict(TypedDict):
    referer_url: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
