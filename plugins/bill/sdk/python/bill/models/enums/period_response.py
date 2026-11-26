from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PeriodResponse(str, Enum):
    """Period for scheduling a recurring bill."""

    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"
    YEARLY = "YEARLY"
    NONE = "NONE"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


PeriodResponseOrStr: TypeAlias = Annotated[PeriodResponse | str, open_enum_validator(PeriodResponse)]
