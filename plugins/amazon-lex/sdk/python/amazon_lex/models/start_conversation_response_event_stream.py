from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .access_denied_exception import AccessDeniedException, AccessDeniedExceptionDict
from .audio_response_event import AudioResponseEvent, AudioResponseEventDict
from .bad_gateway_exception import BadGatewayException, BadGatewayExceptionDict
from .dependency_failed_exception import DependencyFailedException, DependencyFailedExceptionDict
from .heartbeat_event import HeartbeatEvent, HeartbeatEventDict
from .intent_result_event import IntentResultEvent, IntentResultEventDict
from .playback_interruption_event import PlaybackInterruptionEvent, PlaybackInterruptionEventDict
from .runtime_v2_lex_conflict_exception import RuntimeV2LexConflictException, RuntimeV2LexConflictExceptionDict
from .runtime_v2_lex_internal_server_exception import (
    RuntimeV2LexInternalServerException,
    RuntimeV2LexInternalServerExceptionDict,
)
from .runtime_v2_lex_resource_not_found_exception import (
    RuntimeV2LexResourceNotFoundException,
    RuntimeV2LexResourceNotFoundExceptionDict,
)
from .runtime_v2_lex_throttling_exception import RuntimeV2LexThrottlingException, RuntimeV2LexThrottlingExceptionDict
from .runtime_v2_lex_validation_exception import RuntimeV2LexValidationException, RuntimeV2LexValidationExceptionDict
from .text_response_event import TextResponseEvent, TextResponseEventDict
from .transcript_event import TranscriptEvent, TranscriptEventDict


class StartConversationResponseEventStream(SdkBaseModel):
    """Exactly one member is set."""

    playback_interruption_event: Optional[PlaybackInterruptionEvent] = Field(
        default=UNSET, alias="PlaybackInterruptionEvent"
    )
    transcript_event: Optional[TranscriptEvent] = Field(default=UNSET, alias="TranscriptEvent")
    intent_result_event: Optional[IntentResultEvent] = Field(default=UNSET, alias="IntentResultEvent")
    text_response_event: Optional[TextResponseEvent] = Field(default=UNSET, alias="TextResponseEvent")
    audio_response_event: Optional[AudioResponseEvent] = Field(default=UNSET, alias="AudioResponseEvent")
    heartbeat_event: Optional[HeartbeatEvent] = Field(default=UNSET, alias="HeartbeatEvent")
    access_denied_exception: Optional[AccessDeniedException] = Field(default=UNSET, alias="AccessDeniedException")
    resource_not_found_exception: Optional[RuntimeV2LexResourceNotFoundException] = Field(
        default=UNSET, alias="ResourceNotFoundException"
    )
    validation_exception: Optional[RuntimeV2LexValidationException] = Field(default=UNSET, alias="ValidationException")
    throttling_exception: Optional[RuntimeV2LexThrottlingException] = Field(default=UNSET, alias="ThrottlingException")
    internal_server_exception: Optional[RuntimeV2LexInternalServerException] = Field(
        default=UNSET, alias="InternalServerException"
    )
    conflict_exception: Optional[RuntimeV2LexConflictException] = Field(default=UNSET, alias="ConflictException")
    dependency_failed_exception: Optional[DependencyFailedException] = Field(
        default=UNSET, alias="DependencyFailedException"
    )
    bad_gateway_exception: Optional[BadGatewayException] = Field(default=UNSET, alias="BadGatewayException")


class StartConversationResponseEventStreamDict(TypedDict):
    playback_interruption_event: NotRequired[PlaybackInterruptionEventDict]
    transcript_event: NotRequired[TranscriptEventDict]
    intent_result_event: NotRequired[IntentResultEventDict]
    text_response_event: NotRequired[TextResponseEventDict]
    audio_response_event: NotRequired[AudioResponseEventDict]
    heartbeat_event: NotRequired[HeartbeatEventDict]
    access_denied_exception: NotRequired[AccessDeniedExceptionDict]
    resource_not_found_exception: NotRequired[RuntimeV2LexResourceNotFoundExceptionDict]
    validation_exception: NotRequired[RuntimeV2LexValidationExceptionDict]
    throttling_exception: NotRequired[RuntimeV2LexThrottlingExceptionDict]
    internal_server_exception: NotRequired[RuntimeV2LexInternalServerExceptionDict]
    conflict_exception: NotRequired[RuntimeV2LexConflictExceptionDict]
    dependency_failed_exception: NotRequired[DependencyFailedExceptionDict]
    bad_gateway_exception: NotRequired[BadGatewayExceptionDict]
