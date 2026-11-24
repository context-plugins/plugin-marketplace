from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_apigee_edge_config2 import (
    GoogleCloudApihubV1ApigeeEdgeConfig2,
    GoogleCloudApihubV1ApigeeEdgeConfig2Dict,
)
from .google_cloud_apihub_v1_apigee_opdk_config2 import (
    GoogleCloudApihubV1ApigeeOpdkConfig2,
    GoogleCloudApihubV1ApigeeOpdkConfig2Dict,
)
from .google_cloud_apihub_v1_apigee_x_hybrid_config2 import (
    GoogleCloudApihubV1ApigeeXHybridConfig2,
    GoogleCloudApihubV1ApigeeXHybridConfig2Dict,
)


class GoogleCloudApihubV1GatewayPluginConfig(SdkBaseModel):
    """Configuration for a gateway plugin. This is used to specify configs for different gateways."""

    apigee_opdk_config: Optional[GoogleCloudApihubV1ApigeeOpdkConfig2] = Field(default=UNSET, alias="apigeeOpdkConfig")
    """Configuration for Apigee OPDK gateways."""

    apigee_edge_config: Optional[GoogleCloudApihubV1ApigeeEdgeConfig2] = Field(default=UNSET, alias="apigeeEdgeConfig")
    """Configuration for Apigee Edge gateways."""

    apigee_x_hybrid_config: Optional[GoogleCloudApihubV1ApigeeXHybridConfig2] = Field(
        default=UNSET, alias="apigeeXHybridConfig"
    )
    """Configuration for Apigee X and Apigee Hybrid gateways."""

    plugin_instance: Optional[str] = Field(default=UNSET, alias="pluginInstance")
    """Required. The name of the gateway plugin instance for which the config is to be specified. Format:
    projects/{project}/locations/{location}/plugins/{plugin}/pluginInstances/{plugin_instance}"""


class GoogleCloudApihubV1GatewayPluginConfigDict(TypedDict):
    apigee_opdk_config: NotRequired[GoogleCloudApihubV1ApigeeOpdkConfig2Dict]
    apigee_edge_config: NotRequired[GoogleCloudApihubV1ApigeeEdgeConfig2Dict]
    apigee_x_hybrid_config: NotRequired[GoogleCloudApihubV1ApigeeXHybridConfig2Dict]
    plugin_instance: NotRequired[str]
