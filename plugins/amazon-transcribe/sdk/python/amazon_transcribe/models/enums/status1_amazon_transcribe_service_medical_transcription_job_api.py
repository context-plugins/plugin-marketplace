from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    """Lists all medical transcription jobs that have the status specified in your request. Jobs are ordered by creation
    date, with the newest job first."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


Status1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    Status1AmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(Status1AmazonTranscribeServiceMedicalTranscriptionJobApi),
]
