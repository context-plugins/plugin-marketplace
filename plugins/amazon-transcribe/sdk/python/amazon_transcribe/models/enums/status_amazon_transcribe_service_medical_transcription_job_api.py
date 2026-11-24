from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    """Returns only medical transcription jobs with the specified status. Jobs are ordered by creation date, with the
    newest job first. If you do not include Status, all medical transcription jobs are returned."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StatusAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    StatusAmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(StatusAmazonTranscribeServiceMedicalTranscriptionJobApi),
]
