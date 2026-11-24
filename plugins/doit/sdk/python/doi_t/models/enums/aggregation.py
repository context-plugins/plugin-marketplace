from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Aggregation(str, Enum):
    """How to aggregate data values in the report."""

    TOTAL = "total"
    PERCENT_TOTAL = "percent_total"
    PERCENT_COL = "percent_col"
    PERCENT_ROW = "percent_row"
    TOTAL_OVER_TOTAL = "total_over_total"
    COUNT = "count"

    __str__ = str.__str__


AggregationOrStr: TypeAlias = Annotated[Aggregation | str, open_enum_validator(Aggregation)]
