from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bad_request_exception import BadRequestException, BadRequestExceptionDict
from .conflict_exception import ConflictException, ConflictExceptionDict
from .internal_failure_exception import InternalFailureException, InternalFailureExceptionDict
from .limit_exceeded_exception import LimitExceededException, LimitExceededExceptionDict
from .medical_scribe_transcript_event import MedicalScribeTranscriptEvent, MedicalScribeTranscriptEventDict
from .service_unavailable_exception import ServiceUnavailableException, ServiceUnavailableExceptionDict


class MedicalScribeResultStream(SdkBaseModel):
    """Exactly one member is set."""

    transcript_event: Optional[MedicalScribeTranscriptEvent] = Field(default=UNSET, alias="TranscriptEvent")
    bad_request_exception: Optional[BadRequestException] = Field(default=UNSET, alias="BadRequestException")
    limit_exceeded_exception: Optional[LimitExceededException] = Field(default=UNSET, alias="LimitExceededException")
    internal_failure_exception: Optional[InternalFailureException] = Field(
        default=UNSET, alias="InternalFailureException"
    )
    conflict_exception: Optional[ConflictException] = Field(default=UNSET, alias="ConflictException")
    service_unavailable_exception: Optional[ServiceUnavailableException] = Field(
        default=UNSET, alias="ServiceUnavailableException"
    )


class MedicalScribeResultStreamDict(TypedDict):
    transcript_event: NotRequired[MedicalScribeTranscriptEventDict]
    bad_request_exception: NotRequired[BadRequestExceptionDict]
    limit_exceeded_exception: NotRequired[LimitExceededExceptionDict]
    internal_failure_exception: NotRequired[InternalFailureExceptionDict]
    conflict_exception: NotRequired[ConflictExceptionDict]
    service_unavailable_exception: NotRequired[ServiceUnavailableExceptionDict]
