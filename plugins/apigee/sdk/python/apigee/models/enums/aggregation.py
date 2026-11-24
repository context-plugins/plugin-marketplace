from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Aggregation(str, Enum):
    """Aggregation function associated with the metric."""

    AGGREGATION_FUNCTION_UNSPECIFIED = "AGGREGATION_FUNCTION_UNSPECIFIED"
    AVG = "AVG"
    SUM = "SUM"
    MIN = "MIN"
    MAX = "MAX"
    COUNT_DISTINCT = "COUNT_DISTINCT"

    __str__ = str.__str__


AggregationOrStr: TypeAlias = Annotated[Aggregation | str, open_enum_validator(Aggregation)]
