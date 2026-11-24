from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.trigger_mode import TriggerModeOrStr


class GoogleCloudApihubV1PluginActionConfig(SdkBaseModel):
    """PluginActionConfig represents the configuration of an action supported by a plugin."""

    description: Optional[str] = UNSET
    """Required. The description of the operation performed by the action."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the action."""

    id: Optional[str] = UNSET
    """Required. The id of the action."""

    trigger_mode: Optional[TriggerModeOrStr] = Field(default=UNSET, alias="triggerMode")
    """Required. The trigger mode supported by the action."""


class GoogleCloudApihubV1PluginActionConfigDict(TypedDict):
    description: NotRequired[str]
    display_name: NotRequired[str]
    id: NotRequired[str]
    trigger_mode: NotRequired[TriggerModeOrStr]
