from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Retryability(str, Enum):
    RETRYABLE = "retryable"
    NON_RETRYABLE = "non_retryable"
    UNKNOWN = "unknown"

    __str__ = str.__str__


RetryabilityOrStr: TypeAlias = Annotated[Retryability | str, open_enum_validator(Retryability)]
