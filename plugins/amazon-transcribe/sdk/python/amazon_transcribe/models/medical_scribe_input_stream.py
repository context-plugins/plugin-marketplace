from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_audio_event import MedicalScribeAudioEvent, MedicalScribeAudioEventDict
from .medical_scribe_configuration_event import MedicalScribeConfigurationEvent, MedicalScribeConfigurationEventDict
from .medical_scribe_session_control_event import MedicalScribeSessionControlEvent, MedicalScribeSessionControlEventDict


class MedicalScribeInputStream(SdkBaseModel):
    """Exactly one member is set."""

    audio_event: Optional[MedicalScribeAudioEvent] = Field(default=UNSET, alias="AudioEvent")
    session_control_event: Optional[MedicalScribeSessionControlEvent] = Field(
        default=UNSET, alias="SessionControlEvent"
    )
    configuration_event: Optional[MedicalScribeConfigurationEvent] = Field(default=UNSET, alias="ConfigurationEvent")


class MedicalScribeInputStreamDict(TypedDict):
    audio_event: NotRequired[MedicalScribeAudioEventDict]
    session_control_event: NotRequired[MedicalScribeSessionControlEventDict]
    configuration_event: NotRequired[MedicalScribeConfigurationEventDict]
