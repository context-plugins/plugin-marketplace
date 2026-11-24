from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .targeted_sentiment_entity import TargetedSentimentEntity, TargetedSentimentEntityDict


class DetectTargetedSentimentResponse(SdkBaseModel):
    entities: Optional[list[TargetedSentimentEntity]] = Field(default=UNSET, alias="Entities")
    """Targeted sentiment analysis for each of the entities identified in the input text."""


class DetectTargetedSentimentResponseDict(TypedDict):
    entities: NotRequired[list[TargetedSentimentEntityDict]]
