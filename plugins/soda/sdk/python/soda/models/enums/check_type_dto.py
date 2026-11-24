from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckTypeDto(str, Enum):
    MISSING = "missing"
    INVALID = "invalid"
    ROW_COUNT = "row_count"
    AGGREGATE = "aggregate"
    SCHEMA = "schema"
    DUPLICATE = "duplicate"
    FRESHNESS = "freshness"
    FAILED_ROWS = "failed_rows"
    METRIC = "metric"
    GROUP_BY = "group_by"
    ROW_COUNT_DIFF = "row_count_diff"
    AGGREGATE_DIFF = "aggregate_diff"
    FRESHNESS_DIFF = "freshness_diff"
    METRIC_DIFF = "metric_diff"
    ROWS_DIFF = "rows_diff"
    DUPLICATE_DIFF = "duplicate_diff"
    LLM = "llm"
    HIERARCHY = "hierarchy"
    FUZZY_DUPLICATE = "fuzzy_duplicate"
    REFERENCE_DIFF = "reference_diff"

    __str__ = str.__str__


CheckTypeDtoOrStr: TypeAlias = Annotated[CheckTypeDto | str, open_enum_validator(CheckTypeDto)]
