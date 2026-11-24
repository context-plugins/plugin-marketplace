from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComplimentaryAccessTimeUnit2(str, Enum):
    """The unit of time for the gift duration."""

    DAYS = "days"
    MONTHS = "months"
    YEARS = "years"
    FOREVER = "forever"

    __str__ = str.__str__


ComplimentaryAccessTimeUnit2OrStr: TypeAlias = Annotated[
    ComplimentaryAccessTimeUnit2 | str, open_enum_validator(ComplimentaryAccessTimeUnit2)
]
