from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.audio_type import AudioTypeOrStr


class AudioFillerSettings(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    """Specifies whether audio filler playback is enabled for the bot locale. Set to true to play filler audio while
    Amazon Lex processes a user utterance. Set to false to disable filler audio."""

    audio_type: Optional[AudioTypeOrStr] = Field(default=UNSET, alias="audioType")
    """The identifier of the audio filler to play while Amazon Lex processes the user's input. This field is required
    when enabled is true."""

    start_delay_in_milliseconds: Optional[int] = Field(default=UNSET, alias="startDelayInMilliseconds")
    """The time, in milliseconds, to wait after the end of the user's utterance before starting audio filler playback.
    Valid range is 500 to 5000 milliseconds. If not specified, Amazon Lex uses a default of 2500 milliseconds."""

    minimum_play_duration_in_milliseconds: Optional[int] = Field(
        default=UNSET, alias="minimumPlayDurationInMilliseconds"
    )
    """The minimum time, in milliseconds, that audio filler plays once it has started, even if the bot response becomes
    ready sooner. Valid range is 1000 to 5000 milliseconds. If not specified, Amazon Lex uses a default of 3000
    milliseconds."""

    response_delivery_delay_in_milliseconds: Optional[int] = Field(
        default=UNSET, alias="responseDeliveryDelayInMilliseconds"
    )
    """The silent delay, in milliseconds, inserted between the end of audio filler playback and the start of the bot's
    response. Valid range is 200 to 1000 milliseconds. If not specified, Amazon Lex uses a default of 500
    milliseconds."""


class AudioFillerSettingsDict(TypedDict):
    enabled: NotRequired[bool]
    audio_type: NotRequired[AudioTypeOrStr]
    start_delay_in_milliseconds: NotRequired[int]
    minimum_play_duration_in_milliseconds: NotRequired[int]
    response_delivery_delay_in_milliseconds: NotRequired[int]
