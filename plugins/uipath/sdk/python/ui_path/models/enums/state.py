from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Current execution state of the job"""

    PENDING = "Pending"
    RUNNING = "Running"
    STOPPING = "Stopping"
    TERMINATING = "Terminating"
    FAULTED = "Faulted"
    SUCCESSFUL = "Successful"
    STOPPED = "Stopped"
    SUSPENDED = "Suspended"
    RESUMED = "Resumed"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
