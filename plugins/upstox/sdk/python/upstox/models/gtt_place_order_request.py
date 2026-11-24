from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.product3 import Product3OrStr
from .enums.transaction_type import TransactionTypeOrStr
from .enums.type import TypeOrStr
from .gtt_rule import GttRule, GttRuleDict


class GttPlaceOrderRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    """Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order MULTIPLE refers to a
    multi-leg GTT order"""

    quantity: int
    """Quantity with which the order is to be placed"""

    product: Product3OrStr
    """Signifies if the order was either Intraday, Delivery or MTF"""

    rules: list[GttRule]
    """List of rules defining the conditions for each leg in the GTT order"""

    instrument_token: str
    """Key of the instrument"""

    transaction_type: TransactionTypeOrStr
    """Indicates whether its a buy or sell order"""


class GttPlaceOrderRequestDict(TypedDict):
    type_: TypeOrStr
    quantity: int
    product: Product3OrStr
    rules: list[GttRuleDict]
    instrument_token: str
    transaction_type: TransactionTypeOrStr
