from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallStatus(str, Enum):
    ORIGINATING = "originating"
    RINGING = "ringing"
    ANSWERED = "answered"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

    __str__ = str.__str__


CallStatusOrStr: TypeAlias = Annotated[CallStatus | str, open_enum_validator(CallStatus)]
