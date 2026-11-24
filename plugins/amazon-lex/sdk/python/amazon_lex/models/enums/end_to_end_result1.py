from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndToEndResult1(str, Enum):
    """The end-to-end success or failure of the test result evaluation item."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


EndToEndResult1OrStr: TypeAlias = Annotated[EndToEndResult1 | str, open_enum_validator(EndToEndResult1)]
