from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.channel_doi_t_signup_api import ChannelDoiTSignupApi, ChannelDoiTSignupApiOrStr


class Source(SdkBaseModel):
    """Attribution. channel defaults to agent; console and web are the human channels."""

    channel: ChannelDoiTSignupApiOrStr = ChannelDoiTSignupApi.AGENT
    agent_client: Optional[str] = Field(default=UNSET, alias="agentClient")
    """Name and version of the calling agent (agent channel)."""

    campaign: Optional[str] = UNSET
    utm_source: Optional[str] = Field(default=UNSET, alias="utmSource")
    utm_medium: Optional[str] = Field(default=UNSET, alias="utmMedium")
    utm_campaign: Optional[str] = Field(default=UNSET, alias="utmCampaign")


class SourceDict(TypedDict):
    channel: NotRequired[ChannelDoiTSignupApiOrStr]
    agent_client: NotRequired[str]
    campaign: NotRequired[str]
    utm_source: NotRequired[str]
    utm_medium: NotRequired[str]
    utm_campaign: NotRequired[str]
