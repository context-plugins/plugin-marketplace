from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PartialResultsStability(str, Enum):
    """Provides the stabilization level used for your transcription."""

    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


PartialResultsStabilityOrStr: TypeAlias = Annotated[
    PartialResultsStability | str, open_enum_validator(PartialResultsStability)
]
