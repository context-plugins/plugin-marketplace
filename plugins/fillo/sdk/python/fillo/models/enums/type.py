from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    STRING = "string"
    NUMBER = "number"
    DATE = "date"
    DATETIME = "datetime"
    ENUMERATION = "enumeration"
    BOOL = "bool"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
