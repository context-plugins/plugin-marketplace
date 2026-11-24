from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


FormatOrInt: TypeAlias = Annotated[Format | int, open_enum_validator(Format)]
