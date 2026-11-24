from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FreshnessDiffDiagnosticsV4UnitOfTimeDto(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"

    __str__ = str.__str__


FreshnessDiffDiagnosticsV4UnitOfTimeDtoOrStr: TypeAlias = Annotated[
    FreshnessDiffDiagnosticsV4UnitOfTimeDto | str, open_enum_validator(FreshnessDiffDiagnosticsV4UnitOfTimeDto)
]
