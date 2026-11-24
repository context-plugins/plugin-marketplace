from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SentimentAmazonComprehendOperationsApi(str, Enum):
    """The inferred sentiment that Amazon Comprehend has the highest level of confidence in."""

    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

    __str__ = str.__str__


SentimentAmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    SentimentAmazonComprehendOperationsApi | str, open_enum_validator(SentimentAmazonComprehendOperationsApi)
]
