from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.order_type_open_api_definition_order_api import OrderTypeOpenApiDefinitionOrderApiOrStr
from .enums.product_open_api_definition_order_api import ProductOpenApiDefinitionOrderApiOrStr
from .enums.transaction_type import TransactionTypeOrStr
from .enums.validity import ValidityOrStr


class PlaceOrderRequest(SdkBaseModel):
    quantity: int
    """Quantity with which the order is to be placed"""

    product: ProductOpenApiDefinitionOrderApiOrStr
    """Signifies if the order was either Intraday, Delivery, CO or OCO"""

    validity: ValidityOrStr
    """It can be one of the following - DAY(default), IOC"""

    price: float
    """Price at which the order will be placed"""

    tag: Optional[str] = UNSET
    """Tag for a particular order"""

    instrument_token: str
    """Key of the instrument"""

    order_type: OrderTypeOpenApiDefinitionOrderApiOrStr
    """Type of order. It can be one of the following MARKET refers to market order LIMIT refers to Limit Order SL refers
    to Stop Loss Limit SL-M refers to Stop Loss Market"""

    transaction_type: TransactionTypeOrStr
    """Indicates whether its a buy or sell order"""

    disclosed_quantity: int
    """The quantity that should be disclosed in the market depth"""

    trigger_price: float
    """If the order is a stop loss order then the trigger price to be set is mentioned here"""

    is_amo: bool
    """Signifies if the order is an After Market Order"""


class PlaceOrderRequestDict(TypedDict):
    quantity: int
    product: ProductOpenApiDefinitionOrderApiOrStr
    validity: ValidityOrStr
    price: float
    tag: NotRequired[str]
    instrument_token: str
    order_type: OrderTypeOpenApiDefinitionOrderApiOrStr
    transaction_type: TransactionTypeOrStr
    disclosed_quantity: int
    trigger_price: float
    is_amo: bool
