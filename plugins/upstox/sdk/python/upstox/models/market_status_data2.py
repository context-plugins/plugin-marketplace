from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cas_eligible_status_data2 import CasEligibleStatusData2, CasEligibleStatusData2Dict


class MarketStatusData2(SdkBaseModel):
    """Response data for market live status"""

    exchange: Optional[str] = UNSET
    status: Optional[str] = UNSET
    last_updated: Optional[int] = UNSET
    cas_eligible_status: Optional[CasEligibleStatusData2] = UNSET
    """CAS (Closing Auction Session) status of the segment. Present only for segments where CAS exists (e.g. NSE_EQ);
    absent otherwise."""


class MarketStatusData2Dict(TypedDict):
    exchange: NotRequired[str]
    status: NotRequired[str]
    last_updated: NotRequired[int]
    cas_eligible_status: NotRequired[CasEligibleStatusData2Dict]
