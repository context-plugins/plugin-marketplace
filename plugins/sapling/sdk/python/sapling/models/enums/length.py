from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Length(str, Enum):
    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"

    __str__ = str.__str__


LengthOrStr: TypeAlias = Annotated[Length | str, open_enum_validator(Length)]
