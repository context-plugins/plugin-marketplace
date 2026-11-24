from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """The status for the updated test set."""

    IMPORTING = "Importing"
    PENDING_ANNOTATION = "PendingAnnotation"
    DELETING = "Deleting"
    VALIDATION_ERROR = "ValidationError"
    READY = "Ready"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
