from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent_price_point_tiers import AgentPricePointTiers, AgentPricePointTiersDict


class AgentPricePoint(SdkBaseModel):
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    min_quantity: Optional[float] = Field(default=UNSET, alias="minQuantity")
    included_quantity: Optional[float] = Field(default=UNSET, alias="includedQuantity")
    tiers: Optional[list[AgentPricePointTiers]] = UNSET


class AgentPricePointDict(TypedDict):
    unit_price: NotRequired[float]
    min_quantity: NotRequired[float]
    included_quantity: NotRequired[float]
    tiers: NotRequired[list[AgentPricePointTiersDict]]
