from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_plugin import GoogleCloudApihubV1Plugin, GoogleCloudApihubV1PluginDict


class GoogleCloudApihubV1ListPluginsResponse(SdkBaseModel):
    """The ListPlugins method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    plugins: Optional[list[GoogleCloudApihubV1Plugin]] = UNSET
    """The plugins from the specified parent resource."""


class GoogleCloudApihubV1ListPluginsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    plugins: NotRequired[list[GoogleCloudApihubV1PluginDict]]
