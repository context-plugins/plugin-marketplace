from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.order_type6 import OrderType6OrStr
from .enums.validity5 import Validity5OrStr


class ModifyOrderRequest(SdkBaseModel):
    quantity: Optional[int] = UNSET
    """Quantity with which the order was placed"""

    validity: Validity5OrStr
    """Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)"""

    price: float
    """Price at which the order was placed"""

    order_id: str
    """The order ID for which the order must be modified"""

    order_type: OrderType6OrStr
    """Type of order. It can be one of the following MARKET refers to market order LIMILT refers to Limit Order SL
    refers to Stop Loss Limit SL-M refers to Stop Loss Market"""

    disclosed_quantity: Optional[int] = UNSET
    """The quantity that should be disclosed in the market depth"""

    trigger_price: float
    """If the order is a stop loss order then the trigger price to be set is mentioned here"""


class ModifyOrderRequestDict(TypedDict):
    quantity: NotRequired[int]
    validity: Validity5OrStr
    price: float
    order_id: str
    order_type: OrderType6OrStr
    disclosed_quantity: NotRequired[int]
    trigger_price: float
