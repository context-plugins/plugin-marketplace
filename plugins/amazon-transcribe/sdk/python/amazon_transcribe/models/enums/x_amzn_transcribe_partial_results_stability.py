from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribePartialResultsStability(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


XAmznTranscribePartialResultsStabilityOrStr: TypeAlias = Annotated[
    XAmznTranscribePartialResultsStability | str, open_enum_validator(XAmznTranscribePartialResultsStability)
]
