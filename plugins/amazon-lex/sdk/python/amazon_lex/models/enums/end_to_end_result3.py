from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndToEndResult3(str, Enum):
    """Specifies whether the expected and actual outputs match or not, or if there is an error in execution."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


EndToEndResult3OrStr: TypeAlias = Annotated[EndToEndResult3 | str, open_enum_validator(EndToEndResult3)]
