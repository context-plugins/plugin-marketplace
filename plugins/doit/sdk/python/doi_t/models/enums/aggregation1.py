from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Aggregation1(str, Enum):
    """Authoritative aggregation applied to this metric column."""

    TOTAL = "total"
    PERCENT_TOTAL = "percent_total"
    PERCENT_COL = "percent_col"
    PERCENT_ROW = "percent_row"
    TOTAL_OVER_TOTAL = "total_over_total"
    COUNT = "count"

    __str__ = str.__str__


Aggregation1OrStr: TypeAlias = Annotated[Aggregation1 | str, open_enum_validator(Aggregation1)]
