from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.participant_role_amazon_transcribe_service_medical_scribe_job_api import (
    ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApiOrStr,
)


class MedicalScribeChannelDefinition(SdkBaseModel):
    channel_id: int = Field(alias="ChannelId")
    """Specify the audio channel you want to define."""

    participant_role: ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApiOrStr = Field(alias="ParticipantRole")
    """Specify the participant that you want to flag. The options are CLINICIAN and PATIENT"""


class MedicalScribeChannelDefinitionDict(TypedDict):
    channel_id: int
    participant_role: ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApiOrStr
