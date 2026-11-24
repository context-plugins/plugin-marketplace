from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2(str, Enum):
    """Output only. The cluster's state."""

    UNKNOWN = "UNKNOWN"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    ERROR_DUE_TO_UPDATE = "ERROR_DUE_TO_UPDATE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    STARTING = "STARTING"
    REPAIRING = "REPAIRING"
    SCHEDULED = "SCHEDULED"

    __str__ = str.__str__


State2OrStr: TypeAlias = Annotated[State2 | str, open_enum_validator(State2)]
