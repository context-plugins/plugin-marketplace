from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exchange_open_api_definition_order_api import ExchangeOpenApiDefinitionOrderApiOrStr
from .enums.order_type1 import OrderType1OrStr
from .enums.product1 import Product1OrStr
from .enums.transaction_type1 import TransactionType1OrStr
from .enums.validity1 import Validity1OrStr


class OrderBookData2(SdkBaseModel):
    """Response data for order details"""

    exchange: Optional[ExchangeOpenApiDefinitionOrderApiOrStr] = UNSET
    """Exchange to which the order is associated"""

    product: Optional[Product1OrStr] = UNSET
    """Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther"""

    price: Optional[float] = UNSET
    """Price at which the order was placed"""

    quantity: Optional[int] = UNSET
    """Quantity with which the order was placed"""

    status: Optional[str] = UNSET
    """Indicates the current status of the order. Valid order status’ are outlined in the table below"""

    guid: Optional[str] = UNSET
    tag: Optional[str] = UNSET
    """Tag to uniquely identify an order"""

    instrument_token: Optional[str] = UNSET
    """Identifier issued by Upstox used for subscribing to live market quotes"""

    placed_by: Optional[str] = UNSET
    """Uniquely identifies the user"""

    tradingsymbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    trading_symbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    order_type: Optional[OrderType1OrStr] = UNSET
    """Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to Limit Order<br>SL
    refers to Stop Loss Limit<br>SL-M refers to Stop loss market"""

    validity: Optional[Validity1OrStr] = UNSET
    """Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)"""

    trigger_price: Optional[float] = UNSET
    """If the order was a stop loss order then the trigger price set is mentioned here"""

    disclosed_quantity: Optional[int] = UNSET
    """The quantity that should be disclosed in the market depth"""

    transaction_type: Optional[TransactionType1OrStr] = UNSET
    """Indicates whether the order was a buy or sell order"""

    average_price: Optional[float] = UNSET
    """Average price at which the qty got traded"""

    filled_quantity: Optional[int] = UNSET
    """The total quantity traded from this particular order"""

    pending_quantity: Optional[int] = UNSET
    """Pending quantity to be filled"""

    status_message: Optional[str] = UNSET
    """Indicates the reason when any order is rejected, not modified or cancelled"""

    status_message_raw: Optional[str] = UNSET
    """Description of the order's status as received from RMS"""

    exchange_order_id: Optional[str] = UNSET
    """Unique order ID assigned by the exchange for the order placed"""

    parent_order_id: Optional[str] = UNSET
    """In case the order is part of the second or third leg of a CO or OCO, the parent order ID is indicated here"""

    order_id: Optional[str] = UNSET
    """Unique order ID assigned internally for the order placed"""

    variety: Optional[str] = UNSET
    """Order complexity"""

    order_timestamp: Optional[str] = UNSET
    """User readable timestamp at which the order was placed"""

    exchange_timestamp: Optional[str] = UNSET
    """User readable time at which the order was placed or updated"""

    is_amo: Optional[bool] = UNSET
    """Signifies if the order is an After Market Order"""

    order_request_id: Optional[str] = UNSET
    """Apart from 1st order it shows the count of how many requests were sent"""

    order_ref_id: Optional[str] = UNSET
    """The order reference ID for which the order must be modified"""


class OrderBookData2Dict(TypedDict):
    exchange: NotRequired[ExchangeOpenApiDefinitionOrderApiOrStr]
    product: NotRequired[Product1OrStr]
    price: NotRequired[float]
    quantity: NotRequired[int]
    status: NotRequired[str]
    guid: NotRequired[str]
    tag: NotRequired[str]
    instrument_token: NotRequired[str]
    placed_by: NotRequired[str]
    tradingsymbol: NotRequired[str]
    trading_symbol: NotRequired[str]
    order_type: NotRequired[OrderType1OrStr]
    validity: NotRequired[Validity1OrStr]
    trigger_price: NotRequired[float]
    disclosed_quantity: NotRequired[int]
    transaction_type: NotRequired[TransactionType1OrStr]
    average_price: NotRequired[float]
    filled_quantity: NotRequired[int]
    pending_quantity: NotRequired[int]
    status_message: NotRequired[str]
    status_message_raw: NotRequired[str]
    exchange_order_id: NotRequired[str]
    parent_order_id: NotRequired[str]
    order_id: NotRequired[str]
    variety: NotRequired[str]
    order_timestamp: NotRequired[str]
    exchange_timestamp: NotRequired[str]
    is_amo: NotRequired[bool]
    order_request_id: NotRequired[str]
    order_ref_id: NotRequired[str]
