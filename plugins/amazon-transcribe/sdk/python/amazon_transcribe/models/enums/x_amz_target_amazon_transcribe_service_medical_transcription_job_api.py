from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi(str, Enum):
    TRANSCRIBE_DELETE_MEDICAL_TRANSCRIPTION_JOB = "Transcribe.DeleteMedicalTranscriptionJob"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi),
]
