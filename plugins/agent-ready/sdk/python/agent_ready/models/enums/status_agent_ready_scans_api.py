from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAgentReadyScansApi(str, Enum):
    """Lifecycle state of a scan. Poll until status is 'completed' or 'failed'."""

    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusAgentReadyScansApiOrStr: TypeAlias = Annotated[
    StatusAgentReadyScansApi | str, open_enum_validator(StatusAgentReadyScansApi)
]
