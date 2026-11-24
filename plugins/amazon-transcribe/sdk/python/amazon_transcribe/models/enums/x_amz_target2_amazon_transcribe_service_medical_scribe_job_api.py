from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi(str, Enum):
    TRANSCRIBE_LIST_MEDICAL_SCRIBE_JOBS = "Transcribe.ListMedicalScribeJobs"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi),
]
