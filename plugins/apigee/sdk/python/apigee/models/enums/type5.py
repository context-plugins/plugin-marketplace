from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type5(str, Enum):
    """Data type accepted by the data collector."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    STRING = "STRING"
    BOOLEAN = "BOOLEAN"
    DATETIME = "DATETIME"

    __str__ = str.__str__


Type5OrStr: TypeAlias = Annotated[Type5 | str, open_enum_validator(Type5)]
