from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntentStatistics(SdkBaseModel):
    discovered_intent_count: Optional[int] = Field(default=UNSET, alias="discoveredIntentCount")
    """The number of recommended intents associated with the bot recommendation."""


class IntentStatisticsDict(TypedDict):
    discovered_intent_count: NotRequired[int]
