from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    TRANSCRIBE_START_MEDICAL_TRANSCRIPTION_JOB = "Transcribe.StartMedicalTranscriptionJob"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi),
]
