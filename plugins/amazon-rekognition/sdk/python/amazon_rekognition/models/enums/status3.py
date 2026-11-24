from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """The current status of the stop operation."""

    TRAINING_IN_PROGRESS = "TRAINING_IN_PROGRESS"
    TRAINING_COMPLETED = "TRAINING_COMPLETED"
    TRAINING_FAILED = "TRAINING_FAILED"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETING = "DELETING"
    COPYING_IN_PROGRESS = "COPYING_IN_PROGRESS"
    COPYING_COMPLETED = "COPYING_COMPLETED"
    COPYING_FAILED = "COPYING_FAILED"
    DEPRECATED = "DEPRECATED"
    EXPIRED = "EXPIRED"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
