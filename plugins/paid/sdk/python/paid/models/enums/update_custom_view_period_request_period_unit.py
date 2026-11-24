from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UpdateCustomViewPeriodRequestPeriodUnit(str, Enum):
    """relative only: the unit of the rolling window."""

    DAY = "day"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


UpdateCustomViewPeriodRequestPeriodUnitOrStr: TypeAlias = Annotated[
    UpdateCustomViewPeriodRequestPeriodUnit | str, open_enum_validator(UpdateCustomViewPeriodRequestPeriodUnit)
]
