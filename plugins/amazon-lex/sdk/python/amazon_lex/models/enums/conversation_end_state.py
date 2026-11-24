from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConversationEndState(str, Enum):
    """The final state of the conversation. A conversation is defined as a unique combination of a sessionId and an
    originatingRequestId."""

    SUCCESS = "Success"
    FAILURE = "Failure"
    DROPPED = "Dropped"

    __str__ = str.__str__


ConversationEndStateOrStr: TypeAlias = Annotated[ConversationEndState | str, open_enum_validator(ConversationEndState)]
