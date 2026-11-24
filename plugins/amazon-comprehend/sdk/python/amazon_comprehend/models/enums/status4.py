from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4(str, Enum):
    """Provides the status of the entity recognizer."""

    SUBMITTED = "SUBMITTED"
    TRAINING = "TRAINING"
    DELETING = "DELETING"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"
    IN_ERROR = "IN_ERROR"
    TRAINED = "TRAINED"
    TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING"

    __str__ = str.__str__


Status4OrStr: TypeAlias = Annotated[Status4 | str, open_enum_validator(Status4)]
