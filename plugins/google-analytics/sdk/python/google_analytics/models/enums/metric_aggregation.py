from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricAggregation(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"

    __str__ = str.__str__


MetricAggregationOrStr: TypeAlias = Annotated[MetricAggregation | str, open_enum_validator(MetricAggregation)]
