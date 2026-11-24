from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_amazon_transcribe_service_operations_api import StatusAmazonTranscribeServiceOperationsApiOrStr


class ClinicalNoteGenerationResult(SdkBaseModel):
    clinical_note_output_location: Optional[str] = Field(default=UNSET, alias="ClinicalNoteOutputLocation")
    """Holds the Amazon S3 URI for the output Clinical Note."""

    transcript_output_location: Optional[str] = Field(default=UNSET, alias="TranscriptOutputLocation")
    """Holds the Amazon S3 URI for the output Transcript."""

    status: Optional[StatusAmazonTranscribeServiceOperationsApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After audio streaming
    finishes, and you send a MedicalScribeSessionControlEvent event (with END_OF_SESSION as the Type), the status is set
    to IN_PROGRESS. If the status is COMPLETED, the analytics completed successfully, and you can find the results at
    the locations specified in ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED,
    FailureReason provides details about the failure."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If ClinicalNoteGenerationResult is FAILED, information about why it failed."""


class ClinicalNoteGenerationResultDict(TypedDict):
    clinical_note_output_location: NotRequired[str]
    transcript_output_location: NotRequired[str]
    status: NotRequired[StatusAmazonTranscribeServiceOperationsApiOrStr]
    failure_reason: NotRequired[str]
