from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recognition_audio2 import RecognitionAudio2, RecognitionAudio2Dict
from .recognition_config2 import RecognitionConfig2, RecognitionConfig2Dict


class RecognizeRequest(SdkBaseModel):
    """The top-level message sent by the client for the ``Recognize`` method."""

    config: Optional[RecognitionConfig2] = UNSET
    """Required. Provides information to the recognizer that specifies how to process the request."""

    audio: Optional[RecognitionAudio2] = UNSET
    """Required. The audio data to be recognized."""


class RecognizeRequestDict(TypedDict):
    config: NotRequired[RecognitionConfig2Dict]
    audio: NotRequired[RecognitionAudio2Dict]
