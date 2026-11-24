from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_open_api_definition_market_holidays_and_timings_api import (
    Status1OpenApiDefinitionMarketHolidaysAndTimingsApiOrStr,
)


class CasEligibleStatusData(SdkBaseModel):
    status: Optional[Status1OpenApiDefinitionMarketHolidaysAndTimingsApiOrStr] = UNSET
    """The CAS (Collateral Auction Session / Closing Auction Session) status of the segment."""

    last_updated: Optional[int] = UNSET
    """The timestamp (in milliseconds) when the CAS status was last updated."""


class CasEligibleStatusDataDict(TypedDict):
    status: NotRequired[Status1OpenApiDefinitionMarketHolidaysAndTimingsApiOrStr]
    last_updated: NotRequired[int]
