from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuildBatchStatus(str, Enum):
    """The status of the batch build."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


BuildBatchStatusOrStr: TypeAlias = Annotated[BuildBatchStatus | str, open_enum_validator(BuildBatchStatus)]
