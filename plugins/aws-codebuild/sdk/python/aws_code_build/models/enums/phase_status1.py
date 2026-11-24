from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhaseStatus1(str, Enum):
    """The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT The build phase
    faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The build
    phase succeeded. TIMED_OUT The build phase timed out."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


PhaseStatus1OrStr: TypeAlias = Annotated[PhaseStatus1 | str, open_enum_validator(PhaseStatus1)]
