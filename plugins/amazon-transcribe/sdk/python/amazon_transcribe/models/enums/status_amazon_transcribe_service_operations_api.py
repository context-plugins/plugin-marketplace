from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonTranscribeServiceOperationsApi(str, Enum):
    """The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After audio streaming
    finishes, and you send a MedicalScribeSessionControlEvent event (with END_OF_SESSION as the Type), the status is set
    to IN_PROGRESS. If the status is COMPLETED, the analytics completed successfully, and you can find the results at
    the locations specified in ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED,
    FailureReason provides details about the failure."""

    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StatusAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    StatusAmazonTranscribeServiceOperationsApi | str, open_enum_validator(StatusAmazonTranscribeServiceOperationsApi)
]
