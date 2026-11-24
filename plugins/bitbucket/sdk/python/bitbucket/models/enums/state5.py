from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State5(str, Enum):
    OPEN = "OPEN"
    MERGED = "MERGED"
    DECLINED = "DECLINED"
    SUPERSEDED = "SUPERSEDED"

    __str__ = str.__str__


State5OrStr: TypeAlias = Annotated[State5 | str, open_enum_validator(State5)]
