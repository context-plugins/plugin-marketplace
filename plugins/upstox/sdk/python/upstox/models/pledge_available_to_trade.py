from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .margin_from_pledge import MarginFromPledge, MarginFromPledgeDict
from .pledge_margin_used import PledgeMarginUsed, PledgeMarginUsedDict


class PledgeAvailableToTrade(SdkBaseModel):
    margin_from_pledge: Optional[MarginFromPledge] = UNSET
    margin_used: Optional[PledgeMarginUsed] = UNSET


class PledgeAvailableToTradeDict(TypedDict):
    margin_from_pledge: NotRequired[MarginFromPledgeDict]
    margin_used: NotRequired[PledgeMarginUsedDict]
