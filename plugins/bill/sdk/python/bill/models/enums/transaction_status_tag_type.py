from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionStatusTagType(str, Enum):
    r"""StatusTag enum for Spend \& Expense Transactions."""

    APPROVED = "APPROVED"
    COMPLETE = "COMPLETE"
    DECLINED = "DECLINED"
    DENIED = "DENIED"
    DISPUTE_LOST = "DISPUTE_LOST"
    DISPUTE_UPDATE = "DISPUTE_UPDATE"
    DISPUTE_WON = "DISPUTE_WON"
    DISPUTED = "DISPUTED"
    DO_NOT_SYNC = "DO_NOT_SYNC"
    INCOMPLETE = "INCOMPLETE"
    NONE = "NONE"
    PENDING = "PENDING"
    PTR_INCOMPLETE = "PTR_INCOMPLETE"
    PTR_NEEDS_YOUR_APPROVAL = "PTR_NEEDS_YOUR_APPROVAL"
    PTR_PENDING_APPROVAL = "PTR_PENDING_APPROVAL"
    PTR_UPCOMING_APPROVAL = "PTR_UPCOMING_APPROVAL"
    REVIEWED = "REVIEWED"

    __str__ = str.__str__


TransactionStatusTagTypeOrStr: TypeAlias = Annotated[
    TransactionStatusTagType | str, open_enum_validator(TransactionStatusTagType)
]
