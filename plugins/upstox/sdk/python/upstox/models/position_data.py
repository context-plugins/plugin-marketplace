from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exchange1 import Exchange1OrStr


class PositionData(SdkBaseModel):
    exchange: Optional[Exchange1OrStr] = UNSET
    """Exchange to which the order is associated"""

    multiplier: Optional[float] = UNSET
    """The quantity/lot size multiplier used for calculating P&Ls"""

    value: Optional[float] = UNSET
    """Net value of the position"""

    pnl: Optional[float] = UNSET
    """Profit and loss - net returns on the position"""

    product: Optional[str] = UNSET
    """Shows if the order was either Intraday, Delivery, CO or OCO"""

    instrument_token: Optional[str] = UNSET
    """Key issued by Upstox for the instrument"""

    average_price: Optional[float] = UNSET
    """Average price at which the net position quantity was acquired"""

    buy_value: Optional[float] = UNSET
    """Net value of the bought quantities"""

    overnight_quantity: Optional[int] = UNSET
    """Quantity held previously and carried forward over night"""

    day_buy_value: Optional[float] = UNSET
    """Amount at which the quantity is bought during the day"""

    day_buy_price: Optional[float] = UNSET
    """Average price at which the day qty was bought. Default is empty string"""

    overnight_buy_amount: Optional[float] = UNSET
    """Amount at which the quantity was bought in the previous session"""

    overnight_buy_quantity: Optional[int] = UNSET
    """Quantity bought in the previous session"""

    day_buy_quantity: Optional[int] = UNSET
    """Quantity bought during the day"""

    day_sell_value: Optional[float] = UNSET
    """Amount at which the quantity is sold during the day"""

    day_sell_price: Optional[float] = UNSET
    """Average price at which the day quantity was sold"""

    overnight_sell_amount: Optional[float] = UNSET
    """Amount at which the quantity was sold in the previous session"""

    overnight_sell_quantity: Optional[int] = UNSET
    """Quantity sold short in the previous session"""

    day_sell_quantity: Optional[int] = UNSET
    """Quantity sold during the day"""

    quantity: Optional[int] = UNSET
    """Quantity left after nullifying Day and CF buy quantity towards Day and CF sell quantity"""

    last_price: Optional[float] = UNSET
    """Last traded market price of the instrument"""

    unrealised: Optional[float] = UNSET
    """Day PnL generated against open positions"""

    realised: Optional[float] = UNSET
    """Day PnL generated against closed positions"""

    sell_value: Optional[float] = UNSET
    """Net value of the sold quantities"""

    tradingsymbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    trading_symbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    close_price: Optional[float] = UNSET
    """Closing price of the instrument from the last trading day"""

    buy_price: Optional[float] = UNSET
    """Average price at which quantities were bought"""

    sell_price: Optional[float] = UNSET
    """Average price at which quantities were sold"""


class PositionDataDict(TypedDict):
    exchange: NotRequired[Exchange1OrStr]
    multiplier: NotRequired[float]
    value: NotRequired[float]
    pnl: NotRequired[float]
    product: NotRequired[str]
    instrument_token: NotRequired[str]
    average_price: NotRequired[float]
    buy_value: NotRequired[float]
    overnight_quantity: NotRequired[int]
    day_buy_value: NotRequired[float]
    day_buy_price: NotRequired[float]
    overnight_buy_amount: NotRequired[float]
    overnight_buy_quantity: NotRequired[int]
    day_buy_quantity: NotRequired[int]
    day_sell_value: NotRequired[float]
    day_sell_price: NotRequired[float]
    overnight_sell_amount: NotRequired[float]
    overnight_sell_quantity: NotRequired[int]
    day_sell_quantity: NotRequired[int]
    quantity: NotRequired[int]
    last_price: NotRequired[float]
    unrealised: NotRequired[float]
    realised: NotRequired[float]
    sell_value: NotRequired[float]
    tradingsymbol: NotRequired[str]
    trading_symbol: NotRequired[str]
    close_price: NotRequired[float]
    buy_price: NotRequired[float]
    sell_price: NotRequired[float]
