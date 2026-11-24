from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Frequency1(str, Enum):
    """Frequency is "other", "irregular" or a time period e.g. "bi-weekly"
    """

    DAILY = "daily"
    WEEKLY = "weekly"
    BI_WEEKLY = "bi-weekly"
    MONTHLY = "monthly"
    BI_MONTHLY = "bi-monthly"
    QUARTERLY = "quarterly"
    HALF_YEAR = "half-year"
    YEARLY = "yearly"
    OTHER = "other"
    IRREGULAR = "irregular"

    __str__ = str.__str__


Frequency1OrStr: TypeAlias = Annotated[Frequency1 | str, open_enum_validator(Frequency1)]
