from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name25(str, Enum):
    """The measure by which to sort the session analytics data. conversationStartTime – The date and time when the
    conversation began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    numberOfTurns – The number of turns that the session took. conversationDurationSeconds – The duration of the
    conversation in seconds."""

    CONVERSATION_START_TIME = "ConversationStartTime"
    NUMBER_OF_TURNS = "NumberOfTurns"
    DURATION = "Duration"

    __str__ = str.__str__


Name25OrStr: TypeAlias = Annotated[Name25 | str, open_enum_validator(Name25)]
