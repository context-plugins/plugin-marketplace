from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_input_event import AudioInputEvent, AudioInputEventDict
from .configuration_event import ConfigurationEvent, ConfigurationEventDict
from .disconnection_event import DisconnectionEvent, DisconnectionEventDict
from .dtmf_input_event import DtmfInputEvent, DtmfInputEventDict
from .playback_completion_event import PlaybackCompletionEvent, PlaybackCompletionEventDict
from .text_input_event import TextInputEvent, TextInputEventDict


class StartConversationRequestEventStream(SdkBaseModel):
    """Exactly one member is set."""

    configuration_event: Optional[ConfigurationEvent] = Field(default=UNSET, alias="ConfigurationEvent")
    audio_input_event: Optional[AudioInputEvent] = Field(default=UNSET, alias="AudioInputEvent")
    dtmf_input_event: Optional[DtmfInputEvent] = Field(default=UNSET, alias="DTMFInputEvent")
    text_input_event: Optional[TextInputEvent] = Field(default=UNSET, alias="TextInputEvent")
    playback_completion_event: Optional[PlaybackCompletionEvent] = Field(default=UNSET, alias="PlaybackCompletionEvent")
    disconnection_event: Optional[DisconnectionEvent] = Field(default=UNSET, alias="DisconnectionEvent")


class StartConversationRequestEventStreamDict(TypedDict):
    configuration_event: NotRequired[ConfigurationEventDict]
    audio_input_event: NotRequired[AudioInputEventDict]
    dtmf_input_event: NotRequired[DtmfInputEventDict]
    text_input_event: NotRequired[TextInputEventDict]
    playback_completion_event: NotRequired[PlaybackCompletionEventDict]
    disconnection_event: NotRequired[DisconnectionEventDict]
