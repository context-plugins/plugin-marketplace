from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewDetailPeriodUnit(str, Enum):
    """relative only: the unit of the rolling window."""

    DAY = "day"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


CustomViewDetailPeriodUnitOrStr: TypeAlias = Annotated[
    CustomViewDetailPeriodUnit | str, open_enum_validator(CustomViewDetailPeriodUnit)
]
