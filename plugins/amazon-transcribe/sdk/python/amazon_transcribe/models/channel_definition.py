from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.participant_role_amazon_transcribe_service_call_analytics_job_api import (
    ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr,
)


class ChannelDefinition(SdkBaseModel):
    channel_id: Optional[int] = Field(default=UNSET, alias="ChannelId")
    """Specify the audio channel you want to define."""

    participant_role: Optional[ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr] = Field(
        default=UNSET, alias="ParticipantRole"
    )
    """Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants."""


class ChannelDefinitionDict(TypedDict):
    channel_id: NotRequired[int]
    participant_role: NotRequired[ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr]
