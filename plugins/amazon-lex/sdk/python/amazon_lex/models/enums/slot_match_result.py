from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SlotMatchResult(str, Enum):
    """Specifies whether the expected and actual slots match or not."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


SlotMatchResultOrStr: TypeAlias = Annotated[SlotMatchResult | str, open_enum_validator(SlotMatchResult)]
