from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceiptStatusType(str, Enum):
    r"""ReceiptStatusType enum for Spend \& Expense Transactions."""

    VALIDATED = "VALIDATED"
    NOT_VALIDATED = "NOT_VALIDATED"
    ATTACHED = "ATTACHED"
    MISSING = "MISSING"
    NOT_REQUIRED = "NOT_REQUIRED"
    NOT_ATTACHED = "NOT_ATTACHED"
    UNSPECIFIED = "UNSPECIFIED"

    __str__ = str.__str__


ReceiptStatusTypeOrStr: TypeAlias = Annotated[ReceiptStatusType | str, open_enum_validator(ReceiptStatusType)]
