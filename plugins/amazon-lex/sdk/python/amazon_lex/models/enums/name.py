from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name(str, Enum):
    """Specifies the time metric by which to bin the analytics data."""

    CONVERSATION_START_TIME = "ConversationStartTime"
    UTTERANCE_TIMESTAMP = "UtteranceTimestamp"

    __str__ = str.__str__


NameOrStr: TypeAlias = Annotated[Name | str, open_enum_validator(Name)]
