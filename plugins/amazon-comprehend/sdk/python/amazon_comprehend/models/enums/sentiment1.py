from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sentiment1(str, Enum):
    """The sentiment of the mention."""

    POSITIVE = "POSITIVE"
    NEGATIVE = "NEGATIVE"
    NEUTRAL = "NEUTRAL"
    MIXED = "MIXED"

    __str__ = str.__str__


Sentiment1OrStr: TypeAlias = Annotated[Sentiment1 | str, open_enum_validator(Sentiment1)]
