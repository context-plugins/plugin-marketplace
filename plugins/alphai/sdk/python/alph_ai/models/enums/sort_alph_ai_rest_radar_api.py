from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortAlphAiRestRadarApi(str, Enum):
    SCORE = "score"
    STORIES = "stories"
    MODEL_STORIES = "model_stories"
    SENTIMENT = "sentiment"
    SENTIMENT_CHANGE = "sentiment_change"

    __str__ = str.__str__


SortAlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    SortAlphAiRestRadarApi | str, open_enum_validator(SortAlphAiRestRadarApi)
]
