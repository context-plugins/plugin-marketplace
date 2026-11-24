from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ColumnTypeDto(str, Enum):
    UNKNOWN = "unknown"
    STRING = "string"
    INTEGER = "integer"
    FLOAT = "float"
    TIME = "time"
    BOOLEAN = "boolean"
    DATE = "date"
    DATE_TIME = "dateTime"

    __str__ = str.__str__


ColumnTypeDtoOrStr: TypeAlias = Annotated[ColumnTypeDto | str, open_enum_validator(ColumnTypeDto)]
