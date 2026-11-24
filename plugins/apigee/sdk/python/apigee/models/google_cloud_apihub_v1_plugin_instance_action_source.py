from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1PluginInstanceActionSource(SdkBaseModel):
    """PluginInstanceActionSource represents the plugin instance action source."""

    plugin_instance: Optional[str] = Field(default=UNSET, alias="pluginInstance")
    """Output only. The resource name of the source plugin instance. Format is
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Output only. The id of the plugin instance action."""


class GoogleCloudApihubV1PluginInstanceActionSourceDict(TypedDict):
    plugin_instance: NotRequired[str]
    action_id: NotRequired[str]
