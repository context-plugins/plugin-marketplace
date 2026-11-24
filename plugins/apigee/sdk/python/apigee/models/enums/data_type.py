from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType(str, Enum):
    """Optional. Data type of path param"""

    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INTEGER = "INTEGER"
    FLOAT = "FLOAT"
    STRING = "STRING"
    UUID = "UUID"

    __str__ = str.__str__


DataTypeOrStr: TypeAlias = Annotated[DataType | str, open_enum_validator(DataType)]
