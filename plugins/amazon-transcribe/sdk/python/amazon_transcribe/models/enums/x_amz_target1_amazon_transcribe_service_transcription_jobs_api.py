from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    TRANSCRIBE_GET_TRANSCRIPTION_JOB = "Transcribe.GetTranscriptionJob"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi),
]
