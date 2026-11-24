from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType2(str, Enum):
    """Data type of header"""

    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    STRING = "STRING"
    UUID = "UUID"

    __str__ = str.__str__


DataType2OrStr: TypeAlias = Annotated[DataType2 | str, open_enum_validator(DataType2)]
