from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4(str, Enum):
    """The type of Variable. Must be one of [String | Boolean | Number | JSON]"""

    STRING = "String"
    BOOLEAN = "Boolean"
    NUMBER = "Number"
    JSON = "JSON"

    __str__ = str.__str__


Type4OrStr: TypeAlias = Annotated[Type4 | str, open_enum_validator(Type4)]
