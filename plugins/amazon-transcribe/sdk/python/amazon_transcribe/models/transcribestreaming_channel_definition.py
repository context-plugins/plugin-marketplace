from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.participant_role_amazon_transcribe_service_call_analytics_job_api import (
    ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)


class TranscribestreamingChannelDefinition(SdkBaseModel):
    channel_id: int = Field(alias="ChannelId")
    """Specify the audio channel you want to define."""

    participant_role: ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr = Field(alias="ParticipantRole")
    """Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants."""


class TranscribestreamingChannelDefinitionDict(TypedDict):
    channel_id: int
    participant_role: ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr
