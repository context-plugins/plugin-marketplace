from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Field1(str, Enum):
    REGULAR_HOURS = "regularHours"
    SPECIAL_HOURS = "specialHours"
    MORE_HOURS = "moreHours"

    __str__ = str.__str__


Field1OrStr: TypeAlias = Annotated[Field1 | str, open_enum_validator(Field1)]
