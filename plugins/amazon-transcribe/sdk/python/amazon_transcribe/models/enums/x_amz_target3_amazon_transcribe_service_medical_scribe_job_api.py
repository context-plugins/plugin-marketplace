from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    TRANSCRIBE_START_MEDICAL_SCRIBE_JOB = "Transcribe.StartMedicalScribeJob"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi),
]
