from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .post_call_analytics_settings import PostCallAnalyticsSettings, PostCallAnalyticsSettingsDict
from .transcribestreaming_channel_definition import (
    TranscribestreamingChannelDefinition,
    TranscribestreamingChannelDefinitionDict,
)


class ConfigurationEvent(SdkBaseModel):
    channel_definitions: Optional[list[TranscribestreamingChannelDefinition]] = Field(
        default=UNSET, alias="ChannelDefinitions"
    )
    """Indicates which speaker is on which audio channel."""

    post_call_analytics_settings: Optional[PostCallAnalyticsSettings] = Field(
        default=UNSET, alias="PostCallAnalyticsSettings"
    )


class ConfigurationEventDict(TypedDict):
    channel_definitions: NotRequired[list[TranscribestreamingChannelDefinitionDict]]
    post_call_analytics_settings: NotRequired[PostCallAnalyticsSettingsDict]
