from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """Status of the job. This value MUST be specified for ``CreateTransferJobRequests``. **Note:** The effect of the
    new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to
    DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current
    operation."""

    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
