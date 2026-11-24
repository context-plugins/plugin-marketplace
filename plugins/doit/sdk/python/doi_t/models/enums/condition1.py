from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Condition1(str, Enum):
    """Omission preserves the saved condition."""

    VALUE = "value"
    PERCENTAGE_CHANGE = "percentage-change"
    FORECAST = "forecast"

    __str__ = str.__str__


Condition1OrStr: TypeAlias = Annotated[Condition1 | str, open_enum_validator(Condition1)]
