from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerificationDecisionType(str, Enum):
    """Enum for Risk verification decision."""

    APPROVE = "APPROVE"
    REVIEW = "REVIEW"
    HOLD = "HOLD"
    DECLINE = "DECLINE"
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"

    __str__ = str.__str__


VerificationDecisionTypeOrStr: TypeAlias = Annotated[
    VerificationDecisionType | str, open_enum_validator(VerificationDecisionType)
]
