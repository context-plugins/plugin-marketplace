from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Impact(str, Enum):
    """The summary's read of the event for this ticker — an editorial call, not a price label."""

    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"

    __str__ = str.__str__


ImpactOrStr: TypeAlias = Annotated[Impact | str, open_enum_validator(Impact)]
