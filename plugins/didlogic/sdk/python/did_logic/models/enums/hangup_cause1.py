from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HangupCause1(str, Enum):
    AMD_MACHINE = "AMD_MACHINE"
    NORMAL_CLEARING = "NORMAL_CLEARING"
    NO_ANSWER = "NO_ANSWER"
    BUSY = "BUSY"
    FAILED = "FAILED"

    __str__ = str.__str__


HangupCause1OrStr: TypeAlias = Annotated[HangupCause1 | str, open_enum_validator(HangupCause1)]
