from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionReviewerStatusType(str, Enum):
    r"""Spend \& Expense transactions reviewer status type."""

    WAITING = "WAITING"
    APPROVED = "APPROVED"
    DENIED = "DENIED"

    __str__ = str.__str__


TransactionReviewerStatusTypeOrStr: TypeAlias = Annotated[
    TransactionReviewerStatusType | str, open_enum_validator(TransactionReviewerStatusType)
]
