from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnMonitorMetricTypeDto(str, Enum):
    MISSING_PERCENTAGE = "missingPercentage"
    DUPLICATE_PERCENTAGE = "duplicatePercentage"
    AVERAGE = "average"
    COLUMN_FRESHNESS = "columnFreshness"
    SUM = "sum"
    DISTINCT_VALUES_COUNT = "distinctValuesCount"
    COUNT = "count"
    MINIMUM_VALUE = "minimumValue"
    MAXIMUM_VALUE = "maximumValue"
    DUPLICATE_VALUES_PERCENTAGE = "duplicateValuesPercentage"
    MINIMUM_LENGTH = "minimumLength"
    MAXIMUM_LENGTH = "maximumLength"
    AVERAGE_LENGTH = "averageLength"
    STANDARD_DEVIATION = "standardDeviation"
    VARIANCE = "variance"
    Q1 = "q1"
    MEDIAN = "median"
    Q3 = "q3"

    __str__ = str.__str__


ColumnMonitorMetricTypeDtoOrStr: TypeAlias = Annotated[
    ColumnMonitorMetricTypeDto | str, open_enum_validator(ColumnMonitorMetricTypeDto)
]
