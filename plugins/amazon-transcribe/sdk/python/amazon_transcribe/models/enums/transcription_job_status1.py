from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TranscriptionJobStatus1(str, Enum):
    """Provides the status of your medical transcription job. If the status is COMPLETED, the job is finished and you
    can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides
    details on why your transcription job failed."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


TranscriptionJobStatus1OrStr: TypeAlias = Annotated[
    TranscriptionJobStatus1 | str, open_enum_validator(TranscriptionJobStatus1)
]
