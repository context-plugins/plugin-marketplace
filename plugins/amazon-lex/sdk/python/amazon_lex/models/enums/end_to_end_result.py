from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndToEndResult(str, Enum):
    """The success or failure of the streaming of the conversation."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


EndToEndResultOrStr: TypeAlias = Annotated[EndToEndResult | str, open_enum_validator(EndToEndResult)]
