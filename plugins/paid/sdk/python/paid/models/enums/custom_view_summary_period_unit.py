from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewSummaryPeriodUnit(str, Enum):
    """relative only: the unit of the rolling window."""

    DAY = "day"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


CustomViewSummaryPeriodUnitOrStr: TypeAlias = Annotated[
    CustomViewSummaryPeriodUnit | str, open_enum_validator(CustomViewSummaryPeriodUnit)
]
