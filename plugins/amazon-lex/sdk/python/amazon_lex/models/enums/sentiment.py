from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sentiment(str, Enum):
    """The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user
    based on the analysis by Amazon Comprehend."""

    MIXED = "MIXED"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    POSITIVE = "POSITIVE"

    __str__ = str.__str__


SentimentOrStr: TypeAlias = Annotated[Sentiment | str, open_enum_validator(Sentiment)]
