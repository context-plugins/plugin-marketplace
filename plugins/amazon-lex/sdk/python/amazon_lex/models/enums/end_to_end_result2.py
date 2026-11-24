from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndToEndResult2(str, Enum):
    """The selection of matched or mismatched end-to-end status to filter test set results data at the conversation
    level."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


EndToEndResult2OrStr: TypeAlias = Annotated[EndToEndResult2 | str, open_enum_validator(EndToEndResult2)]
