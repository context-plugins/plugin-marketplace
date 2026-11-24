from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloseDay(str, Enum):
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

    __str__ = str.__str__


CloseDayOrStr: TypeAlias = Annotated[CloseDay | str, open_enum_validator(CloseDay)]
