from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionStatus(str, Enum):
    """The test execution status for the test execution."""

    PENDING = "Pending"
    WAITING = "Waiting"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


TestExecutionStatusOrStr: TypeAlias = Annotated[TestExecutionStatus | str, open_enum_validator(TestExecutionStatus)]
