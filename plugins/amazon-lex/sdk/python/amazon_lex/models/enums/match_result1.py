from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchResult1(str, Enum):
    """The number of matching slots used in the slots listings for the slot resolution evaluation."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


MatchResult1OrStr: TypeAlias = Annotated[MatchResult1 | str, open_enum_validator(MatchResult1)]
