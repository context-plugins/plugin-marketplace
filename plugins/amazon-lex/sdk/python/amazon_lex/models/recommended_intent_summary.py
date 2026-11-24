from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecommendedIntentSummary(SdkBaseModel):
    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The unique identifier of a recommended intent associated with the bot recommendation."""

    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of a recommended intent associated with the bot recommendation."""

    sample_utterances_count: Optional[int] = Field(default=UNSET, alias="sampleUtterancesCount")
    """The count of sample utterances of a recommended intent that is associated with a bot recommendation."""


class RecommendedIntentSummaryDict(TypedDict):
    intent_id: NotRequired[str]
    intent_name: NotRequired[str]
    sample_utterances_count: NotRequired[int]
