from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CashBreakdown(SdkBaseModel):
    opening_balance: Optional[float] = UNSET
    added_today: Optional[float] = UNSET
    withdrawn_today: Optional[float] = UNSET
    amount_from_stock_sale: Optional[float] = UNSET
    unpaid_charges: Optional[float] = UNSET


class CashBreakdownDict(TypedDict):
    opening_balance: NotRequired[float]
    added_today: NotRequired[float]
    withdrawn_today: NotRequired[float]
    amount_from_stock_sale: NotRequired[float]
    unpaid_charges: NotRequired[float]
