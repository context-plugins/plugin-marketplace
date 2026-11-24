from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SpeakerDiarizationSettings(SdkBaseModel):
    enabled: bool
    """Specifies whether speaker diarization is enabled for the bot locale. Set to true to have Amazon Lex treat speech
    from speakers other than the primary speaker as non-speech. Set to false to disable speaker diarization and rely on
    voice activity detection alone."""


class SpeakerDiarizationSettingsDict(TypedDict):
    enabled: bool
