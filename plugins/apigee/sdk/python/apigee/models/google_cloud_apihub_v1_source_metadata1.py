from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source_type import SourceTypeOrStr
from .google_cloud_apihub_v1_plugin_instance_action_source2 import (
    GoogleCloudApihubV1PluginInstanceActionSource2,
    GoogleCloudApihubV1PluginInstanceActionSource2Dict,
)


class GoogleCloudApihubV1SourceMetadata1(SdkBaseModel):
    """Output only. The metadata of the source from which the api operation was collected."""

    original_resource_id: Optional[str] = Field(default=UNSET, alias="originalResourceId")
    """Output only. The unique identifier of the resource at the source."""

    original_resource_create_time: Optional[str] = Field(default=UNSET, alias="originalResourceCreateTime")
    """Output only. The time at which the resource was created at the source."""

    plugin_instance_action_source: Optional[GoogleCloudApihubV1PluginInstanceActionSource2] = Field(
        default=UNSET, alias="pluginInstanceActionSource"
    )
    """Output only. The source of the resource is a plugin instance action."""

    source_type: Optional[SourceTypeOrStr] = Field(default=UNSET, alias="sourceType")
    """Output only. The type of the source."""

    original_resource_update_time: Optional[str] = Field(default=UNSET, alias="originalResourceUpdateTime")
    """Output only. The time at which the resource was last updated at the source."""


class GoogleCloudApihubV1SourceMetadata1Dict(TypedDict):
    original_resource_id: NotRequired[str]
    original_resource_create_time: NotRequired[str]
    plugin_instance_action_source: NotRequired[GoogleCloudApihubV1PluginInstanceActionSource2Dict]
    source_type: NotRequired[SourceTypeOrStr]
    original_resource_update_time: NotRequired[str]
