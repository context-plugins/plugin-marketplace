from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    TRANSCRIBE_GET_MEDICAL_SCRIBE_JOB = "Transcribe.GetMedicalScribeJob"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi),
]
