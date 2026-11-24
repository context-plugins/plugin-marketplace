from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    TRANSCRIBE_START_TRANSCRIPTION_JOB = "Transcribe.StartTranscriptionJob"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi),
]
