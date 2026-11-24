from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType(str, Enum):
    """Data type of the attribute."""

    STRING = "string"
    NUMBER = "number"
    BOOLEAN = "boolean"
    DATE = "date"

    __str__ = str.__str__


DataTypeOrStr: TypeAlias = Annotated[DataType | str, open_enum_validator(DataType)]
