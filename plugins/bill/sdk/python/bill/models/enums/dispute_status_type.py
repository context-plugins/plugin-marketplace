from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisputeStatusType(str, Enum):
    r"""Dispute status enum for Spend \& Expense Transactions."""

    SUBMITTED = "SUBMITTED"
    IN_PROGRESS = "IN_PROGRESS"
    CLOSED_WON = "CLOSED_WON"
    CLOSED_LOST = "CLOSED_LOST"

    __str__ = str.__str__


DisputeStatusTypeOrStr: TypeAlias = Annotated[DisputeStatusType | str, open_enum_validator(DisputeStatusType)]
