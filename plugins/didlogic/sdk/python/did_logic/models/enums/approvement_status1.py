from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApprovementStatus1(str, Enum):
    """Document approval status (in review = pending, verified = approved)"""

    IN_REVIEW = "in review"
    VERIFIED = "verified"
    REJECTED = "rejected"
    EXPIRED = "expired"

    __str__ = str.__str__


ApprovementStatus1OrStr: TypeAlias = Annotated[ApprovementStatus1 | str, open_enum_validator(ApprovementStatus1)]
