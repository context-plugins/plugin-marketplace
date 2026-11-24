from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollType(str, Enum):
    VOTING = "voting"
    TRIVIA = "trivia"

    __str__ = str.__str__


PollTypeOrStr: TypeAlias = Annotated[PollType | str, open_enum_validator(PollType)]
