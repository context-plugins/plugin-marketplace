from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    TRANSCRIBE_DELETE_MEDICAL_SCRIBE_JOB = "Transcribe.DeleteMedicalScribeJob"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi),
]
