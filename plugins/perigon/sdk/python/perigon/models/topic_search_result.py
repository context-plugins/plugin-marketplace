from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .topic_dto import TopicDto, TopicDtoDict


class TopicSearchResult(SdkBaseModel):
    """Topic search result"""

    total: int
    data: list[TopicDto]


class TopicSearchResultDict(TypedDict):
    total: int
    data: list[TopicDtoDict]
