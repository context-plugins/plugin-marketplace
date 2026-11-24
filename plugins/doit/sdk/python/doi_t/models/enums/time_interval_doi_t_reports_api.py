from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeIntervalDoiTReportsApi(str, Enum):
    """Time interval for grouping data in the report."""

    HOUR = "hour"
    DAY = "day"
    DAY_CUM_SUM = "dayCumSum"
    WEEK = "week"
    ISOWEEK = "isoweek"
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"
    WEEK_DAY = "week_day"

    __str__ = str.__str__


TimeIntervalDoiTReportsApiOrStr: TypeAlias = Annotated[
    TimeIntervalDoiTReportsApi | str, open_enum_validator(TimeIntervalDoiTReportsApi)
]
