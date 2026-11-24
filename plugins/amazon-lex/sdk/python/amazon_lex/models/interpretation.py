from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .confidence_score import ConfidenceScore, ConfidenceScoreDict
from .enums.interpretation_source import InterpretationSourceOrStr
from .intent import Intent, IntentDict
from .sentiment_response import SentimentResponse, SentimentResponseDict


class Interpretation(SdkBaseModel):
    nlu_confidence: Optional[ConfidenceScore] = Field(default=UNSET, alias="nluConfidence")
    sentiment_response: Optional[SentimentResponse] = Field(default=UNSET, alias="sentimentResponse")
    intent: Optional[Intent] = UNSET
    interpretation_source: Optional[InterpretationSourceOrStr] = Field(default=UNSET, alias="interpretationSource")
    """Specifies the service that interpreted the input."""


class InterpretationDict(TypedDict):
    nlu_confidence: NotRequired[ConfidenceScoreDict]
    sentiment_response: NotRequired[SentimentResponseDict]
    intent: NotRequired[IntentDict]
    interpretation_source: NotRequired[InterpretationSourceOrStr]
