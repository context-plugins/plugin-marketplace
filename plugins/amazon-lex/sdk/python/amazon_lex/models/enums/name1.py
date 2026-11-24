from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name1(str, Enum):
    """The criterion by which to bin the results."""

    CONVERSATION_START_TIME = "ConversationStartTime"
    UTTERANCE_TIMESTAMP = "UtteranceTimestamp"

    __str__ = str.__str__


Name1OrStr: TypeAlias = Annotated[Name1 | str, open_enum_validator(Name1)]
