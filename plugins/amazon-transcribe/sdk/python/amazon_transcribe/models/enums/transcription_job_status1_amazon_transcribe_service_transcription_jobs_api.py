from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    """Provides the status of your transcription job. If the status is COMPLETED, the job is finished and you can find
    the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested
    transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job
    failed."""

    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi),
]
