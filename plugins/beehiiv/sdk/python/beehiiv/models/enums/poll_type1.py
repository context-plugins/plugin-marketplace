from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollType1(str, Enum):
    """The type of poll."""

    VOTING = "voting"
    TRIVIA = "trivia"

    __str__ = str.__str__


PollType1OrStr: TypeAlias = Annotated[PollType1 | str, open_enum_validator(PollType1)]
