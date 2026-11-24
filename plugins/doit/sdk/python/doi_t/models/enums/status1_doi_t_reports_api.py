from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DoiTReportsApi(str, Enum):
    """Current lifecycle status of the operation."""

    PENDING = "pending"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    CANCELED = "canceled"
    DRY_RUN = "dry_run"

    __str__ = str.__str__


Status1DoiTReportsApiOrStr: TypeAlias = Annotated[
    Status1DoiTReportsApi | str, open_enum_validator(Status1DoiTReportsApi)
]
