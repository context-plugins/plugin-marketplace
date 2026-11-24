from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    TRANSCRIBE_DELETE_TRANSCRIPTION_JOB = "Transcribe.DeleteTranscriptionJob"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi),
]
