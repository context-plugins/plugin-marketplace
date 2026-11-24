from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exchange_open_api_definition_order_api import ExchangeOpenApiDefinitionOrderApiOrStr
from .enums.order_type1 import OrderType1OrStr
from .enums.product4 import Product4OrStr
from .enums.transaction_type1 import TransactionType1OrStr


class TradeData(SdkBaseModel):
    exchange: Optional[ExchangeOpenApiDefinitionOrderApiOrStr] = UNSET
    """Exchange to which the order is associated"""

    product: Optional[Product4OrStr] = UNSET
    """Shows if the order was either Intraday, Delivery, CO or OCO"""

    tradingsymbol: Optional[str] = UNSET
    """Shows the trading symbol which could be a combination of symbol name, instrument, expiry date etc"""

    trading_symbol: Optional[str] = UNSET
    """Shows the trading symbol which could be a combination of symbol name, instrument, expiry date etc"""

    instrument_token: Optional[str] = UNSET
    """Identifier issued by Upstox used for subscribing to live market quotes"""

    order_type: Optional[OrderType1OrStr] = UNSET
    """Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to Limit Order<br>SL
    refers to Stop Loss Limit<br>SL-M refers to Stop loss market"""

    transaction_type: Optional[TransactionType1OrStr] = UNSET
    """Indicates whether the order was a buy or sell order"""

    quantity: Optional[int] = UNSET
    """The total quantity traded from this particular order"""

    exchange_order_id: Optional[str] = UNSET
    """Unique order ID assigned by the exchange for the order placed"""

    order_id: Optional[str] = UNSET
    """Unique order ID assigned internally for the order placed"""

    exchange_timestamp: Optional[str] = UNSET
    """User readable time at when the trade occurred"""

    average_price: Optional[float] = UNSET
    """Price at which the traded quantity is traded"""

    trade_id: Optional[str] = UNSET
    """Trade ID generated from exchange towards traded transaction"""

    order_ref_id: Optional[str] = UNSET
    """The order reference ID for which the order must be modified"""

    order_timestamp: Optional[str] = UNSET
    """User readable timestamp at which the order was placed"""


class TradeDataDict(TypedDict):
    exchange: NotRequired[ExchangeOpenApiDefinitionOrderApiOrStr]
    product: NotRequired[Product4OrStr]
    tradingsymbol: NotRequired[str]
    trading_symbol: NotRequired[str]
    instrument_token: NotRequired[str]
    order_type: NotRequired[OrderType1OrStr]
    transaction_type: NotRequired[TransactionType1OrStr]
    quantity: NotRequired[int]
    exchange_order_id: NotRequired[str]
    order_id: NotRequired[str]
    exchange_timestamp: NotRequired[str]
    average_price: NotRequired[float]
    trade_id: NotRequired[str]
    order_ref_id: NotRequired[str]
    order_timestamp: NotRequired[str]
