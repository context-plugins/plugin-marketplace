from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MedicalScribeJobStatus(str, Enum):
    """Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason
    provides details on why your Medical Scribe job failed."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


MedicalScribeJobStatusOrStr: TypeAlias = Annotated[
    MedicalScribeJobStatus | str, open_enum_validator(MedicalScribeJobStatus)
]
