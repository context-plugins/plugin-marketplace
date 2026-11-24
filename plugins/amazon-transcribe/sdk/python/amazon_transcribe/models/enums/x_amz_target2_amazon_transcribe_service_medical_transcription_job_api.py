from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS = "Transcribe.ListMedicalTranscriptionJobs"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi),
]
