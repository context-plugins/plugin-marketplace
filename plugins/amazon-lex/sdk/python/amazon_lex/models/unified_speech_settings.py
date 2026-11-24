from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .speech_foundation_model import SpeechFoundationModel, SpeechFoundationModelDict


class UnifiedSpeechSettings(SdkBaseModel):
    speech_foundation_model: SpeechFoundationModel = Field(alias="speechFoundationModel")


class UnifiedSpeechSettingsDict(TypedDict):
    speech_foundation_model: SpeechFoundationModelDict
