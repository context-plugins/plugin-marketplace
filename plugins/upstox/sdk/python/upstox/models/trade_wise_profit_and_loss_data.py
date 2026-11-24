from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TradeWiseProfitAndLossData(SdkBaseModel):
    quantity: Optional[float] = UNSET
    """The quantity of stock traded"""

    isin: Optional[str] = UNSET
    """ISIN of the stock"""

    scrip_name: Optional[str] = UNSET
    """Name of the scrip traded"""

    trade_type: Optional[str] = UNSET
    """FUT - Futures

    OPT - Options

    EQ - Equity"""

    buy_date: Optional[str] = UNSET
    """The date on which the stock was bought"""

    buy_average: Optional[float] = UNSET
    """The average rate at which each quantity of the stock was bought"""

    sell_date: Optional[str] = UNSET
    """The date on which the stock was sold"""

    sell_average: Optional[float] = UNSET
    """The average rate at which each quantity of the stock was sold"""

    buy_amount: Optional[float] = UNSET
    """Total buy amount"""

    sell_amount: Optional[float] = UNSET
    """Total sell amount"""


class TradeWiseProfitAndLossDataDict(TypedDict):
    quantity: NotRequired[float]
    isin: NotRequired[str]
    scrip_name: NotRequired[str]
    trade_type: NotRequired[str]
    buy_date: NotRequired[str]
    buy_average: NotRequired[float]
    sell_date: NotRequired[str]
    sell_average: NotRequired[float]
    buy_amount: NotRequired[float]
    sell_amount: NotRequired[float]
