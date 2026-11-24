from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    PAGE = "page"
    EVENT = "event"
    GOAL = "goal"
    SCROLL = "scroll"
    ENTRY_PAGE = "entry_page"
    EXIT_PAGE = "exit_page"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
