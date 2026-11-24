from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SentimentHolder(SdkBaseModel):
    """Aggregate sentiment scores for the story."""

    positive: OptionalNullable[float] = UNSET
    """Positive sentiment score from 0 to 1."""

    negative: OptionalNullable[float] = UNSET
    """Negative sentiment score from 0 to 1."""

    neutral: OptionalNullable[float] = UNSET
    """Neutral sentiment score from 0 to 1."""


class SentimentHolderDict(TypedDict):
    positive: NotRequired[float | None]
    negative: NotRequired[float | None]
    neutral: NotRequired[float | None]
