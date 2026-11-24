from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatePrecision(str, Enum):
    """Granularity of ``scheduled_at``. ``exact`` = timestamp known; ``day`` = date only; ``month`` = only the month is
    known. Consumers that need a date should still use ``scheduled_at`` (set to a representative point inside the
    window)."""

    EXACT = "exact"
    DAY = "day"
    MONTH = "month"

    __str__ = str.__str__


DatePrecisionOrStr: TypeAlias = Annotated[DatePrecision | str, open_enum_validator(DatePrecision)]
