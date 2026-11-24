from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTAnomaliesApi(str, Enum):
    START_TIME = "startTime"
    SEVERITY_LEVEL = "severityLevel"
    COST_OF_ANOMALY = "costOfAnomaly"

    __str__ = str.__str__


SortByDoiTAnomaliesApiOrStr: TypeAlias = Annotated[
    SortByDoiTAnomaliesApi | str, open_enum_validator(SortByDoiTAnomaliesApi)
]
