from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType3(str, Enum):
    """Required. The type of the data of the attribute."""

    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    ENUM = "ENUM"
    JSON = "JSON"
    STRING = "STRING"
    URI = "URI"

    __str__ = str.__str__


DataType3OrStr: TypeAlias = Annotated[DataType3 | str, open_enum_validator(DataType3)]
