from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Frequency(str, Enum):
    """Enum detailing frequency regular income"""

    DAILY = "daily"
    WEEKLY = "weekly"
    BI_WEEKLY = "bi-weekly"
    MONTHLY = "monthly"
    BI_MONTHLY = "bi-monthly"
    QUARTERLY = "quarterly"
    HALF_YEAR = "half-year"
    YEARLY = "yearly"

    __str__ = str.__str__


FrequencyOrStr: TypeAlias = Annotated[Frequency | str, open_enum_validator(Frequency)]
