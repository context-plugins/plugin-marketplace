from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValueType(str, Enum):
    """Required. Type of the parameter: string, int, bool etc."""

    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    STRING = "STRING"
    INT = "INT"
    BOOL = "BOOL"
    SECRET = "SECRET"
    ENUM = "ENUM"
    MULTI_SELECT = "MULTI_SELECT"
    MULTI_STRING = "MULTI_STRING"
    MULTI_INT = "MULTI_INT"

    __str__ = str.__str__


ValueTypeOrStr: TypeAlias = Annotated[ValueType | str, open_enum_validator(ValueType)]
