from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusContentstackAutomateManagementExecutionLogsApi(str, Enum):
    """Outcome status of the execution."""

    SUCCESS = "success"
    FAILURE = "failure"
    PARTIAL = "partial"

    __str__ = str.__str__


StatusContentstackAutomateManagementExecutionLogsApiOrStr: TypeAlias = Annotated[
    StatusContentstackAutomateManagementExecutionLogsApi | str,
    open_enum_validator(StatusContentstackAutomateManagementExecutionLogsApi),
]
