from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bad_request_exception import BadRequestException, BadRequestExceptionDict
from .category_event import CategoryEvent, CategoryEventDict
from .conflict_exception import ConflictException, ConflictExceptionDict
from .internal_failure_exception import InternalFailureException, InternalFailureExceptionDict
from .limit_exceeded_exception import LimitExceededException, LimitExceededExceptionDict
from .service_unavailable_exception import ServiceUnavailableException, ServiceUnavailableExceptionDict
from .utterance_event import UtteranceEvent, UtteranceEventDict


class CallAnalyticsTranscriptResultStream(SdkBaseModel):
    """Exactly one member is set."""

    utterance_event: Optional[UtteranceEvent] = Field(default=UNSET, alias="UtteranceEvent")
    category_event: Optional[CategoryEvent] = Field(default=UNSET, alias="CategoryEvent")
    bad_request_exception: Optional[BadRequestException] = Field(default=UNSET, alias="BadRequestException")
    limit_exceeded_exception: Optional[LimitExceededException] = Field(default=UNSET, alias="LimitExceededException")
    internal_failure_exception: Optional[InternalFailureException] = Field(
        default=UNSET, alias="InternalFailureException"
    )
    conflict_exception: Optional[ConflictException] = Field(default=UNSET, alias="ConflictException")
    service_unavailable_exception: Optional[ServiceUnavailableException] = Field(
        default=UNSET, alias="ServiceUnavailableException"
    )


class CallAnalyticsTranscriptResultStreamDict(TypedDict):
    utterance_event: NotRequired[UtteranceEventDict]
    category_event: NotRequired[CategoryEventDict]
    bad_request_exception: NotRequired[BadRequestExceptionDict]
    limit_exceeded_exception: NotRequired[LimitExceededExceptionDict]
    internal_failure_exception: NotRequired[InternalFailureExceptionDict]
    conflict_exception: NotRequired[ConflictExceptionDict]
    service_unavailable_exception: NotRequired[ServiceUnavailableExceptionDict]
