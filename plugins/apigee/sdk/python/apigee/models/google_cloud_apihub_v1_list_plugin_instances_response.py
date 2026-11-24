from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_plugin_instance import (
    GoogleCloudApihubV1PluginInstance,
    GoogleCloudApihubV1PluginInstanceDict,
)


class GoogleCloudApihubV1ListPluginInstancesResponse(SdkBaseModel):
    """The ListPluginInstances method's response."""

    plugin_instances: Optional[list[GoogleCloudApihubV1PluginInstance]] = Field(default=UNSET, alias="pluginInstances")
    """The plugin instances from the specified parent resource."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApihubV1ListPluginInstancesResponseDict(TypedDict):
    plugin_instances: NotRequired[list[GoogleCloudApihubV1PluginInstanceDict]]
    next_page_token: NotRequired[str]
