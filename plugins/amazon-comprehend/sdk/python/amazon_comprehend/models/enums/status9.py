from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status9(str, Enum):
    """The status of an entity recognizer."""

    SUBMITTED = "SUBMITTED"
    TRAINING = "TRAINING"
    DELETING = "DELETING"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"
    IN_ERROR = "IN_ERROR"
    TRAINED = "TRAINED"
    TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING"

    __str__ = str.__str__


Status9OrStr: TypeAlias = Annotated[Status9 | str, open_enum_validator(Status9)]
