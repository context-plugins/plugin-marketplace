from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sentiment(str, Enum):
    """The sentiment detected in the document."""

    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

    __str__ = str.__str__


SentimentOrStr: TypeAlias = Annotated[Sentiment | str, open_enum_validator(Sentiment)]
