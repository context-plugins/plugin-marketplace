from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status7(str, Enum):
    """Filters the list of classifiers based on status."""

    SUBMITTED = "SUBMITTED"
    TRAINING = "TRAINING"
    DELETING = "DELETING"
    STOP_REQUESTED = "STOP_REQUESTED"
    STOPPED = "STOPPED"
    IN_ERROR = "IN_ERROR"
    TRAINED = "TRAINED"
    TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING"

    __str__ = str.__str__


Status7OrStr: TypeAlias = Annotated[Status7 | str, open_enum_validator(Status7)]
