from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name17(str, Enum):
    """The metric that you requested. Count – The number of sessions. Success – The number of sessions that succeeded.
    Failure – The number of sessions that failed. Dropped – The number of sessions that the user dropped. Duration – The
    duration of sessions. TurnPersession – The number of turns in the sessions. Concurrency – The number of sessions
    occurring in the same period of time."""

    COUNT = "Count"
    SUCCESS = "Success"
    FAILURE = "Failure"
    DROPPED = "Dropped"
    DURATION = "Duration"
    TURNS_PER_CONVERSATION = "TurnsPerConversation"
    CONCURRENCY = "Concurrency"

    __str__ = str.__str__


Name17OrStr: TypeAlias = Annotated[Name17 | str, open_enum_validator(Name17)]
