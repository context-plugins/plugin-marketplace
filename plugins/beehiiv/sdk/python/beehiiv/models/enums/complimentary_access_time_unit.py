from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComplimentaryAccessTimeUnit(str, Enum):
    """The unit of time for the gift duration.<br>``days`` - Duration in days.<br>``months`` - Duration in
    months.<br>``years`` - Duration in years.<br>``forever`` - Lifetime access with no expiration."""

    DAYS = "days"
    MONTHS = "months"
    YEARS = "years"
    FOREVER = "forever"

    __str__ = str.__str__


ComplimentaryAccessTimeUnitOrStr: TypeAlias = Annotated[
    ComplimentaryAccessTimeUnit | str, open_enum_validator(ComplimentaryAccessTimeUnit)
]
