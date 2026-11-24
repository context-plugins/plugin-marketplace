from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchResult(str, Enum):
    """The number of times the specific intent is used in the evaluation of intent level success or failure."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


MatchResultOrStr: TypeAlias = Annotated[MatchResult | str, open_enum_validator(MatchResult)]
