from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.slot_resolution_strategy import SlotResolutionStrategyOrStr


class SlotResolutionSetting(SdkBaseModel):
    slot_resolution_strategy: SlotResolutionStrategyOrStr = Field(alias="slotResolutionStrategy")
    """Specifies whether assisted slot resolution is turned on for the slot or not. If the value is EnhancedFallback,
    assisted slot resolution is activated when Amazon Lex V2 defaults to the AMAZON.FallbackIntent. If the value is
    Default, assisted slot resolution is turned off."""


class SlotResolutionSettingDict(TypedDict):
    slot_resolution_strategy: SlotResolutionStrategyOrStr
