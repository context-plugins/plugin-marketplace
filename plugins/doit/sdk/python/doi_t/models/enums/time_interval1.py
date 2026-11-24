from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeInterval1(str, Enum):
    """The period each evaluation looks at. Omission preserves the saved interval."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"

    __str__ = str.__str__


TimeInterval1OrStr: TypeAlias = Annotated[TimeInterval1 | str, open_enum_validator(TimeInterval1)]
