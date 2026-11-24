from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApprovementStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    EXPIRED = "expired"
    IN_REVIEW = "in review"
    VERIFIED = "verified"

    __str__ = str.__str__


ApprovementStatusOrStr: TypeAlias = Annotated[ApprovementStatus | str, open_enum_validator(ApprovementStatus)]
