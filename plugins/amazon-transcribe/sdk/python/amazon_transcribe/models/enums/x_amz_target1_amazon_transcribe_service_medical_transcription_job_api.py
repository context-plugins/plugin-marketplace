from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    TRANSCRIBE_GET_MEDICAL_TRANSCRIPTION_JOB = "Transcribe.GetMedicalTranscriptionJob"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi),
]
