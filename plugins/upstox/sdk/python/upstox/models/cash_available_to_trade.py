from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cash_breakdown import CashBreakdown, CashBreakdownDict
from .cash_margin_used import CashMarginUsed, CashMarginUsedDict


class CashAvailableToTrade(SdkBaseModel):
    total: Optional[float] = UNSET
    cash: Optional[CashBreakdown] = UNSET
    margin_used: Optional[CashMarginUsed] = UNSET


class CashAvailableToTradeDict(TypedDict):
    total: NotRequired[float]
    cash: NotRequired[CashBreakdownDict]
    margin_used: NotRequired[CashMarginUsedDict]
