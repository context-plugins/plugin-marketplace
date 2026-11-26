from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.intent_source import IntentSourceOrStr


class NormalizedIntent(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    label: str
    """Name or ID of the intent."""

    confidence_score: float = Field(alias="confidenceScore")
    """Probability number that the AI assigns to this intent."""

    intent_source: IntentSourceOrStr = Field(alias="intentSource")
    """Prediction system that detects the intent.

    * ``DIRECT``—Utterance search or an exact match
    * ``CORE_NLP``—Third-party Natural Language Processing (NLP)
    * ``EINSTEIN_NLP``—Einstein NLP"""


class NormalizedIntentDict(TypedDict):
    label: str
    confidence_score: float
    intent_source: IntentSourceOrStr
