from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntentMatchResult(str, Enum):
    """Specifies whether the expected and actual intents match or not."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


IntentMatchResultOrStr: TypeAlias = Annotated[IntentMatchResult | str, open_enum_validator(IntentMatchResult)]
