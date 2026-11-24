from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StopReason(str, Enum):
    DONE = "done"
    MAX_STEPS = "max_steps"
    LENGTH = "length"
    TIMEOUT = "timeout"
    MALFORMED_TOOL_CALL = "malformed_tool_call"

    __str__ = str.__str__


StopReasonOrStr: TypeAlias = Annotated[StopReason | str, open_enum_validator(StopReason)]
