from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.engine import EngineOrStr


class VoiceSettings(SdkBaseModel):
    engine: Optional[EngineOrStr] = UNSET
    """Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more
    information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide. If you
    do not specify a value, the default is standard."""

    voice_id: str = Field(alias="voiceId")
    """The identifier of the Amazon Polly voice to use."""


class VoiceSettingsDict(TypedDict):
    engine: NotRequired[EngineOrStr]
    voice_id: str
