from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuildStatus(str, Enum):
    """The current status of the build. Valid values include: FAILED: The build failed. FAULT: The build faulted.
    IN_PROGRESS: The build is still in progress. STOPPED: The build stopped. SUCCEEDED: The build succeeded. TIMED_OUT:
    The build timed out."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


BuildStatusOrStr: TypeAlias = Annotated[BuildStatus | str, open_enum_validator(BuildStatus)]
