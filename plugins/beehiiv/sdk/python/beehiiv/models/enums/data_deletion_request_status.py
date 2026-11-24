from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataDeletionRequestStatus(str, Enum):
    """The current status of the data deletion request."""

    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

    __str__ = str.__str__


DataDeletionRequestStatusOrStr: TypeAlias = Annotated[
    DataDeletionRequestStatus | str, open_enum_validator(DataDeletionRequestStatus)
]
