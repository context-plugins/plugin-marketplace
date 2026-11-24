from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataType(str, Enum):
    TEXT = "text"
    NUMBER = "number"
    BOOLEAN = "boolean"
    DATE = "date"
    SELECT = "select"
    MULTISELECT = "multiselect"
    CURRENCY = "currency"
    REFERENCE = "reference"
    EMAIL = "email"
    URL = "url"

    __str__ = str.__str__


DataTypeOrStr: TypeAlias = Annotated[DataType | str, open_enum_validator(DataType)]
