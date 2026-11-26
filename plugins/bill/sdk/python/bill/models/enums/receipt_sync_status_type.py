from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceiptSyncStatusType(str, Enum):
    r"""ReceiptSyncStatusType enum for Spend \& Expense Transactions."""

    NOT_SYNCED = "NOT_SYNCED"
    SYNCED = "SYNCED"
    SYNC_ERROR = "SYNC_ERROR"
    NO_ATTACHMENTS = "NO_ATTACHMENTS"

    __str__ = str.__str__


ReceiptSyncStatusTypeOrStr: TypeAlias = Annotated[
    ReceiptSyncStatusType | str, open_enum_validator(ReceiptSyncStatusType)
]
