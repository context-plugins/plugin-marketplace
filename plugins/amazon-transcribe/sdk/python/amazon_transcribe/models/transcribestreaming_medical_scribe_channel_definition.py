from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.participant_role2 import ParticipantRole2OrStr


class TranscribestreamingMedicalScribeChannelDefinition(SdkBaseModel):
    channel_id: int = Field(alias="ChannelId")
    """Specify the audio channel you want to define."""

    participant_role: ParticipantRole2OrStr = Field(alias="ParticipantRole")
    """Specify the participant that you want to flag. The allowed options are CLINICIAN and PATIENT."""


class TranscribestreamingMedicalScribeChannelDefinitionDict(TypedDict):
    channel_id: int
    participant_role: ParticipantRole2OrStr
