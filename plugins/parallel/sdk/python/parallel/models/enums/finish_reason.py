from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FinishReason(str, Enum):
    STOP = "stop"
    LENGTH = "length"
    TOOL_CALLS = "tool_calls"
    CONTENT_FILTER = "content_filter"
    FUNCTION_CALL = "function_call"

    __str__ = str.__str__


FinishReasonOrStr: TypeAlias = Annotated[FinishReason | str, open_enum_validator(FinishReason)]
