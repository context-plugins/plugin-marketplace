from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.continent import ContinentOrStr


class AnalyticsContinents(SdkBaseModel):
    continent: Optional[ContinentOrStr] = UNSET
    """The 2-letter ISO 3166-1 code representing the continent associated with the location of the user."""

    clicks: float = 0.0
    """The number of clicks from this continent"""

    leads: float = 0.0
    """The number of leads from this continent"""

    sales: float = 0.0
    """The number of sales from this continent"""

    sale_amount: float = Field(default=0.0, alias="saleAmount")
    """The total amount of sales from this continent, in cents"""


class AnalyticsContinentsDict(TypedDict):
    continent: NotRequired[ContinentOrStr]
    clicks: float
    leads: float
    sales: float
    sale_amount: float
