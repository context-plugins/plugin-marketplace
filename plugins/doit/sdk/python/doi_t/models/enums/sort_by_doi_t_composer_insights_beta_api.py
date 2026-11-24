from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTComposerInsightsBetaApi(str, Enum):
    SEVERITY = "severity"
    TITLE = "title"
    DETECTION_TIME = "detection_time"
    ACTIVE_RESULTS_COUNT = "active_results_count"
    TOTAL_RESULTS_COUNT = "total_results_count"

    __str__ = str.__str__


SortByDoiTComposerInsightsBetaApiOrStr: TypeAlias = Annotated[
    SortByDoiTComposerInsightsBetaApi | str, open_enum_validator(SortByDoiTComposerInsightsBetaApi)
]
