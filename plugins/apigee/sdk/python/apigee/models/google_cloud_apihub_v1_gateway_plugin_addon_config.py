from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_gateway_plugin_config import (
    GoogleCloudApihubV1GatewayPluginConfig,
    GoogleCloudApihubV1GatewayPluginConfigDict,
)


class GoogleCloudApihubV1GatewayPluginAddonConfig(SdkBaseModel):
    """Configuration for gateway plugin addons. This is used to specify the list of gateway plugin configs for which the
    addon is enabled."""

    gateway_plugin_configs: Optional[list[GoogleCloudApihubV1GatewayPluginConfig]] = Field(
        default=UNSET, alias="gatewayPluginConfigs"
    )
    """Required. The list of gateway plugin configs for which the addon is enabled. Each gateway plugin config should
    have a unique plugin instance."""


class GoogleCloudApihubV1GatewayPluginAddonConfigDict(TypedDict):
    gateway_plugin_configs: NotRequired[list[GoogleCloudApihubV1GatewayPluginConfigDict]]
