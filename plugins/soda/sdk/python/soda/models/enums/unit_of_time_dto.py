from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UnitOfTimeDto(str, Enum):
    HOURS = "hours"
    DAYS = "days"
    WEEKS = "weeks"

    __str__ = str.__str__


UnitOfTimeDtoOrStr: TypeAlias = Annotated[UnitOfTimeDto | str, open_enum_validator(UnitOfTimeDto)]
