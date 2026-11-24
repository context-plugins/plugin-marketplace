from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    TRANSCRIBE_LIST_TRANSCRIPTION_JOBS = "Transcribe.ListTranscriptionJobs"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi),
]
