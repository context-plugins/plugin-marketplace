from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsDevices(SdkBaseModel):
    device: str
    """The name of the device"""

    clicks: float = 0.0
    """The number of clicks from this device"""

    leads: float = 0.0
    """The number of leads from this device"""

    sales: float = 0.0
    """The number of sales from this device"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this device, in cents"""


class AnalyticsDevicesDict(TypedDict):
    device: str
    clicks: float
    leads: float
    sales: float
    sale_amount: float
