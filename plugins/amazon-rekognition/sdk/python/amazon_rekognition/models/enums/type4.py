from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4(str, Enum):
    """The type of text that was detected."""

    LINE = "LINE"
    WORD = "WORD"

    __str__ = str.__str__


Type4OrStr: TypeAlias = Annotated[Type4 | str, open_enum_validator(Type4)]
