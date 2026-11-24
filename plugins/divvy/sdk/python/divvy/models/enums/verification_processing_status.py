from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerificationProcessingStatus(str, Enum):
    """Enum for risk verification processing status."""

    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


VerificationProcessingStatusOrStr: TypeAlias = Annotated[
    VerificationProcessingStatus | str, open_enum_validator(VerificationProcessingStatus)
]
