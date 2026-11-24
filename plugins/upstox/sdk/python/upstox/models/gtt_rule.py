from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.strategy import StrategyOrStr
from .enums.trigger_type import TriggerTypeOrStr


class GttRule(SdkBaseModel):
    strategy: StrategyOrStr
    """Defines the strategy for the GTT order leg: ENTRY - First leg order STOPLOSS - Stop-loss order TARGET - Target
    order"""

    trigger_type: TriggerTypeOrStr
    """Trigger type for each leg of the order"""

    trigger_price: float
    """Trigger price for the GTT order leg"""

    trailing_gap: Optional[float] = UNSET
    """Optional parameter defining the trailing gap for the GTT order"""

    market_protection: Optional[float] = UNSET
    """Optional parameter defining the market protection percentage for the GTT order"""


class GttRuleDict(TypedDict):
    strategy: StrategyOrStr
    trigger_type: TriggerTypeOrStr
    trigger_price: float
    trailing_gap: NotRequired[float]
    market_protection: NotRequired[float]
