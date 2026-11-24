from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recognition_audio2 import RecognitionAudio2, RecognitionAudio2Dict
from .recognition_config2 import RecognitionConfig2, RecognitionConfig2Dict
from .transcript_output_config2 import TranscriptOutputConfig2, TranscriptOutputConfig2Dict


class LongRunningRecognizeRequest(SdkBaseModel):
    """The top-level message sent by the client for the ``LongRunningRecognize`` method."""

    output_config: Optional[TranscriptOutputConfig2] = Field(default=UNSET, alias="outputConfig")
    """Optional. Specifies an optional destination for the recognition results."""

    audio: Optional[RecognitionAudio2] = UNSET
    """Required. The audio data to be recognized."""

    config: Optional[RecognitionConfig2] = UNSET
    """Required. Provides information to the recognizer that specifies how to process the request."""


class LongRunningRecognizeRequestDict(TypedDict):
    output_config: NotRequired[TranscriptOutputConfig2Dict]
    audio: NotRequired[RecognitionAudio2Dict]
    config: NotRequired[RecognitionConfig2Dict]
