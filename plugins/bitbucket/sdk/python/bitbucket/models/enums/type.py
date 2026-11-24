from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of data contained in the value field. If not provided, then the value will be detected as a boolean,
    number or string."""

    BOOLEAN = "BOOLEAN"
    DATE = "DATE"
    DURATION = "DURATION"
    LINK = "LINK"
    NUMBER = "NUMBER"
    PERCENTAGE = "PERCENTAGE"
    TEXT = "TEXT"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
