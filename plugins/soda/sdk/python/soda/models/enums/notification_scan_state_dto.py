from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NotificationScanStateDto(str, Enum):
    FAILED = "failed"
    TIMED_OUT = "timedOut"
    CANCELED = "canceled"
    COMPLETED_WITH_ERRORS = "completedWithErrors"

    __str__ = str.__str__


NotificationScanStateDtoOrStr: TypeAlias = Annotated[
    NotificationScanStateDto | str, open_enum_validator(NotificationScanStateDto)
]
