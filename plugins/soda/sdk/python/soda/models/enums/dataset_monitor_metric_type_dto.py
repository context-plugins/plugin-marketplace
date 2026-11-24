from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DatasetMonitorMetricTypeDto(str, Enum):
    ROW_COUNT = "rowCount"
    FRESHNESS = "freshness"
    SCHEMA = "schema"
    ROWS_INSERTED = "rowsInserted"
    TOTAL_ROW_COUNT_CHANGE = "totalRowCountChange"
    TIMELINESS = "timeliness"
    RECORD_ANOMALY_SCORE = "recordAnomalyScore"

    __str__ = str.__str__


DatasetMonitorMetricTypeDtoOrStr: TypeAlias = Annotated[
    DatasetMonitorMetricTypeDto | str, open_enum_validator(DatasetMonitorMetricTypeDto)
]
