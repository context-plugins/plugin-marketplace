from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pricing import Pricing, PricingDict


class AgentAttribute(SdkBaseModel):
    name: str
    active: bool
    pricing: Pricing


class AgentAttributeDict(TypedDict):
    name: str
    active: bool
    pricing: PricingDict
