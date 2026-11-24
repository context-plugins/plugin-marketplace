from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PledgeUnavailableToTrade(SdkBaseModel):
    equity: Optional[float] = UNSET
    mutual_funds: Optional[float] = UNSET


class PledgeUnavailableToTradeDict(TypedDict):
    equity: NotRequired[float]
    mutual_funds: NotRequired[float]
