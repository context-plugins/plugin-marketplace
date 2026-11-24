from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentPricePointTiers(SdkBaseModel):
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    max_quantity: Optional[float] = Field(default=UNSET, alias="maxQuantity")
    unit_price: float = Field(alias="unitPrice")


class AgentPricePointTiersDict(TypedDict):
    min_quantity: NotRequired[float]
    max_quantity: NotRequired[float]
    unit_price: float
