from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1PluginInstanceActionId(SdkBaseModel):
    """The plugin instance and associated action that is using the curation."""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Output only. The action ID that is using the curation. This should map to one of the action IDs specified in
    action configs in the plugin."""

    plugin_instance: Optional[str] = Field(default=UNSET, alias="pluginInstance")
    """Output only. Plugin instance that is using the curation. Format is
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""


class GoogleCloudApihubV1PluginInstanceActionIdDict(TypedDict):
    action_id: NotRequired[str]
    plugin_instance: NotRequired[str]
