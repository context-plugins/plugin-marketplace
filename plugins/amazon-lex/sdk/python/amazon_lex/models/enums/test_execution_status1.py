from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionStatus1(str, Enum):
    """The current status of the test execution."""

    PENDING = "Pending"
    WAITING = "Waiting"
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


TestExecutionStatus1OrStr: TypeAlias = Annotated[TestExecutionStatus1 | str, open_enum_validator(TestExecutionStatus1)]
