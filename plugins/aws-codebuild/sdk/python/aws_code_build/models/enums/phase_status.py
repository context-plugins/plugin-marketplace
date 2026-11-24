from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhaseStatus(str, Enum):
    """The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed. FAULT The sandbox
    phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED The sandbox phase stopped. SUCCEEDED The
    sandbox phase succeeded. TIMED_OUT The sandbox phase timed out."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    FAULT = "FAULT"
    TIMED_OUT = "TIMED_OUT"
    IN_PROGRESS = "IN_PROGRESS"
    STOPPED = "STOPPED"

    __str__ = str.__str__


PhaseStatusOrStr: TypeAlias = Annotated[PhaseStatus | str, open_enum_validator(PhaseStatus)]
