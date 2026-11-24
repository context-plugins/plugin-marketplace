from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr
from .gtt_rule import GttRule, GttRuleDict


class GttModifyOrderRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    """Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order MULTIPLE refers to a
    multi-leg GTT order"""

    quantity: int
    """Quantity with which the order is to be placed"""

    rules: list[GttRule]
    """List of rules defining the conditions for each leg in the GTT order"""

    gtt_order_id: str
    """Unique identifier of the GTT order to be modified"""


class GttModifyOrderRequestDict(TypedDict):
    type_: TypeOrStr
    quantity: int
    rules: list[GttRuleDict]
    gtt_order_id: str
