from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_all_data_addon_config2 import (
    GoogleCloudApihubV1AllDataAddonConfig2,
    GoogleCloudApihubV1AllDataAddonConfig2Dict,
)
from .google_cloud_apihub_v1_gateway_plugin_addon_config2 import (
    GoogleCloudApihubV1GatewayPluginAddonConfig2,
    GoogleCloudApihubV1GatewayPluginAddonConfig2Dict,
)


class GoogleCloudApihubV1AddonConfig(SdkBaseModel):
    """Configuration for the addon."""

    gateway_plugin_addon_config: Optional[GoogleCloudApihubV1GatewayPluginAddonConfig2] = Field(
        default=UNSET, alias="gatewayPluginAddonConfig"
    )
    """Configuration for gateway plugin addons."""

    all_data_addon_config: Optional[GoogleCloudApihubV1AllDataAddonConfig2] = Field(
        default=UNSET, alias="allDataAddonConfig"
    )
    """Configuration for addons which act on all data in the API hub."""


class GoogleCloudApihubV1AddonConfigDict(TypedDict):
    gateway_plugin_addon_config: NotRequired[GoogleCloudApihubV1GatewayPluginAddonConfig2Dict]
    all_data_addon_config: NotRequired[GoogleCloudApihubV1AllDataAddonConfig2Dict]
