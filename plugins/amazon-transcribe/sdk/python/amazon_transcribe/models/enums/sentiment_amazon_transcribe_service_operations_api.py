from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SentimentAmazonTranscribeServiceOperationsApi(str, Enum):
    """Provides the sentiment that was detected in the specified segment."""

    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    MIXED = "MIXED"
    NEUTRAL = "NEUTRAL"

    __str__ = str.__str__


SentimentAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    SentimentAmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(SentimentAmazonTranscribeServiceOperationsApi),
]
