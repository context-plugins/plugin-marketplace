from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sentiment2(str, Enum):
    """The inferred sentiment that Amazon Comprehend has the highest level of confidence in."""

    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

    __str__ = str.__str__


Sentiment2OrStr: TypeAlias = Annotated[Sentiment2 | str, open_enum_validator(Sentiment2)]
