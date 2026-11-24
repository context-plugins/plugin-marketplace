from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApprovalStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"
    EXPIRED = "expired"
    CANCELLED = "cancelled"

    __str__ = str.__str__


ApprovalStatusOrStr: TypeAlias = Annotated[ApprovalStatus | str, open_enum_validator(ApprovalStatus)]
