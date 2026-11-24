from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PollsExpandItems(str, Enum):
    STATS = "stats"
    POLL_RESPONSES = "poll_responses"
    TRIVIA_ANSWER = "trivia_answer"

    __str__ = str.__str__


PollsExpandItemsOrStr: TypeAlias = Annotated[PollsExpandItems | str, open_enum_validator(PollsExpandItems)]
