from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HangupCause(str, Enum):
    """How the call ended:
    - ``AMD_MACHINE`` — AMD detected an answering machine; takes precedence over the other values
    - ``NORMAL_CLEARING`` — the call was answered
    - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer
    - ``BUSY`` — the called party was busy
    - ``FAILED`` — the call could not be connected

    ``null`` for calls made before hangup causes were recorded, for calls whose outcome the platform did not recognise,
    and for API calls that never reached the destination number."""

    AMD_MACHINE = "AMD_MACHINE"
    NORMAL_CLEARING = "NORMAL_CLEARING"
    NO_ANSWER = "NO_ANSWER"
    BUSY = "BUSY"
    FAILED = "FAILED"

    __str__ = str.__str__


HangupCauseOrStr: TypeAlias = Annotated[HangupCause | str, open_enum_validator(HangupCause)]
