from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransferStatus(str, Enum):
    """Transfer processing status."""

    CREATED = "created"
    PENDING = "pending"
    PROCESSED = "processed"
    FAILED = "failed"
    REVERSED = "reversed"
    PARTIALLY_REVERSED = "partially_reversed"

    __str__ = str.__str__


TransferStatusOrStr: TypeAlias = Annotated[TransferStatus | str, open_enum_validator(TransferStatus)]
