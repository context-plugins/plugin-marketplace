from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Topic(SdkBaseModel):
    topic: str
    relevance: float


class TopicDict(TypedDict):
    topic: str
    relevance: float
