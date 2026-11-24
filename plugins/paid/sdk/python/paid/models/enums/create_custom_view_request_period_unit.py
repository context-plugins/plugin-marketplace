from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateCustomViewRequestPeriodUnit(str, Enum):
    """relative only: the unit of the rolling window."""

    DAY = "day"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


CreateCustomViewRequestPeriodUnitOrStr: TypeAlias = Annotated[
    CreateCustomViewRequestPeriodUnit | str, open_enum_validator(CreateCustomViewRequestPeriodUnit)
]
