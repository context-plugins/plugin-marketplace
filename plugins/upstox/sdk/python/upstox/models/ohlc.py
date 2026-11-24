from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Ohlc(SdkBaseModel):
    open: Optional[float] = UNSET
    """The open price of the trading session"""

    high: Optional[float] = UNSET
    """The high price of the trading session"""

    low: Optional[float] = UNSET
    """The low price of the trading session"""

    close: Optional[float] = UNSET
    """The close price of the symbol from the previous session of trading"""


class OhlcDict(TypedDict):
    open: NotRequired[float]
    high: NotRequired[float]
    low: NotRequired[float]
    close: NotRequired[float]
