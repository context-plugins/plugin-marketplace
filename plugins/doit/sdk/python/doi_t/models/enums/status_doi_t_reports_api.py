from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTReportsApi(str, Enum):
    """Current lifecycle status of the operation."""

    PENDING = "pending"
    RUNNING = "running"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    CANCELED = "canceled"

    __str__ = str.__str__


StatusDoiTReportsApiOrStr: TypeAlias = Annotated[StatusDoiTReportsApi | str, open_enum_validator(StatusDoiTReportsApi)]
