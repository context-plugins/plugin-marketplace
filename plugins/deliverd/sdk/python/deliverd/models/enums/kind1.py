from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind1(str, Enum):
    TEXT = "text"
    LONG_TEXT = "long_text"
    NUMBER = "number"
    DATE = "date"
    CHOICE = "choice"
    MULTI_CHOICE = "multi_choice"
    BOOLEAN = "boolean"

    __str__ = str.__str__


Kind1OrStr: TypeAlias = Annotated[Kind1 | str, open_enum_validator(Kind1)]
