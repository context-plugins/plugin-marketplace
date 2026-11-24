from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status5(str, Enum):
    """The status of the flywheel iteration."""

    TRAINING = "TRAINING"
    EVALUATING = "EVALUATING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


Status5OrStr: TypeAlias = Annotated[Status5 | str, open_enum_validator(Status5)]
