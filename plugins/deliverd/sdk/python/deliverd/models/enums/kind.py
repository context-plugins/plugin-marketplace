from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """What kind of answer: text, long_text, number, date, choice, multi_choice or boolean"""

    TEXT = "text"
    LONG_TEXT = "long_text"
    NUMBER = "number"
    DATE = "date"
    CHOICE = "choice"
    MULTI_CHOICE = "multi_choice"
    BOOLEAN = "boolean"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
