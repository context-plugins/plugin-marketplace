from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.collection_type import CollectionTypeOrStr
from .google_cloud_apihub_v1_api_data2 import GoogleCloudApihubV1ApiData2, GoogleCloudApihubV1ApiData2Dict


class GoogleCloudApihubV1CollectApiDataRequest(SdkBaseModel):
    """The CollectApiData method's request."""

    collection_type: Optional[CollectionTypeOrStr] = Field(default=UNSET, alias="collectionType")
    """Required. The type of collection. Applies to all entries in api_data."""

    plugin_instance: Optional[str] = Field(default=UNSET, alias="pluginInstance")
    """Required. The plugin instance collecting the API data. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``."""

    api_data: Optional[GoogleCloudApihubV1ApiData2] = Field(default=UNSET, alias="apiData")
    """Required. The API data to be collected."""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Required. The action ID to be used for collecting the API data. This should map to one of the action IDs
    specified in action configs in the plugin."""


class GoogleCloudApihubV1CollectApiDataRequestDict(TypedDict):
    collection_type: NotRequired[CollectionTypeOrStr]
    plugin_instance: NotRequired[str]
    api_data: NotRequired[GoogleCloudApihubV1ApiData2Dict]
    action_id: NotRequired[str]
