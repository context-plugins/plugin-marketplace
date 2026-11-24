from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AllowedInputTypes(SdkBaseModel):
    allow_audio_input: bool = Field(alias="allowAudioInput")
    """Indicates whether audio input is allowed."""

    allow_dtmf_input: bool = Field(alias="allowDTMFInput")
    """Indicates whether DTMF input is allowed."""


class AllowedInputTypesDict(TypedDict):
    allow_audio_input: bool
    allow_dtmf_input: bool
