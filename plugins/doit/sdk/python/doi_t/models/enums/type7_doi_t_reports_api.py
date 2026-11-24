from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type7DoiTReportsApi(str, Enum):
    """Wire-format type of the column values. Dimension columns use string; metric columns use float (cost, usage,
    saving, custom, and extended metrics) or integer (count aggregation). Time-series reports include a timestamp
    column."""

    STRING = "string"
    FLOAT = "float"
    INTEGER = "integer"
    TIMESTAMP = "timestamp"

    __str__ = str.__str__


Type7DoiTReportsApiOrStr: TypeAlias = Annotated[Type7DoiTReportsApi | str, open_enum_validator(Type7DoiTReportsApi)]
