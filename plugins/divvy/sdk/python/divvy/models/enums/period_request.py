from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PeriodRequest(str, Enum):
    """Period for scheduling a recurring bill."""

    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    NONE = "NONE"

    __str__ = str.__str__


PeriodRequestOrStr: TypeAlias = Annotated[PeriodRequest | str, open_enum_validator(PeriodRequest)]
