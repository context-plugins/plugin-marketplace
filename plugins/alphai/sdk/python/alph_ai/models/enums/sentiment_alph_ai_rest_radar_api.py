from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SentimentAlphAiRestRadarApi(str, Enum):
    ALL = "all"
    POSITIVE = "positive"
    NEGATIVE = "negative"
    MIXED = "mixed"

    __str__ = str.__str__


SentimentAlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    SentimentAlphAiRestRadarApi | str, open_enum_validator(SentimentAlphAiRestRadarApi)
]
