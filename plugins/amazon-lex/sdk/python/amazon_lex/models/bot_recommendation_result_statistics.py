from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent_statistics import IntentStatistics, IntentStatisticsDict
from .slot_type_statistics import SlotTypeStatistics, SlotTypeStatisticsDict


class BotRecommendationResultStatistics(SdkBaseModel):
    intents: Optional[IntentStatistics] = UNSET
    slot_types: Optional[SlotTypeStatistics] = Field(default=UNSET, alias="slotTypes")


class BotRecommendationResultStatisticsDict(TypedDict):
    intents: NotRequired[IntentStatisticsDict]
    slot_types: NotRequired[SlotTypeStatisticsDict]
