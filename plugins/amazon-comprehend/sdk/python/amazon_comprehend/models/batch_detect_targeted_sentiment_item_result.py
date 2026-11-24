from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .targeted_sentiment_entity import TargetedSentimentEntity, TargetedSentimentEntityDict


class BatchDetectTargetedSentimentItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of this result in the input list."""

    entities: Optional[list[TargetedSentimentEntity]] = Field(default=UNSET, alias="Entities")
    """An array of targeted sentiment entities."""


class BatchDetectTargetedSentimentItemResultDict(TypedDict):
    index: NotRequired[int]
    entities: NotRequired[list[TargetedSentimentEntityDict]]
