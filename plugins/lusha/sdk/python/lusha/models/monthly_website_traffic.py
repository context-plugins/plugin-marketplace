from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MonthlyWebsiteTraffic(SdkBaseModel):
    """Revealed via reveal: ["monthlyWebsiteTraffic"] in Enrich Companies. Charged 1 credit when non-null."""

    visits: Optional[float] = UNSET
    mom_change_percent: Optional[float] = Field(default=UNSET, alias="momChangePercent")
    month: Optional[str] = UNSET


class MonthlyWebsiteTrafficDict(TypedDict):
    visits: NotRequired[float]
    mom_change_percent: NotRequired[float]
    month: NotRequired[str]
