from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBoomiPlatformRestExecutionApi(str, Enum):
    """Final status of the execution."""

    COMPLETE = "COMPLETE"
    ERROR = "ERROR"
    INPROCESS = "INPROCESS"
    ABORTED = "ABORTED"
    DISCARDED = "DISCARDED"

    __str__ = str.__str__


StatusBoomiPlatformRestExecutionApiOrStr: TypeAlias = Annotated[
    StatusBoomiPlatformRestExecutionApi | str, open_enum_validator(StatusBoomiPlatformRestExecutionApi)
]
