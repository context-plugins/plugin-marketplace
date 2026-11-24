from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """How far the call got. ``agent_ringing`` may be skipped — see the description above."""

    ACCEPTED = "accepted"
    AGENT_RINGING = "agent_ringing"
    AGENT_ANSWERED = "agent_answered"
    CUSTOMER_RINGING = "customer_ringing"
    BRIDGED = "bridged"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
