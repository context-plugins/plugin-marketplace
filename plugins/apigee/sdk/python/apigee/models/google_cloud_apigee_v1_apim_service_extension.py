from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state12 import State12OrStr
from .google_cloud_apigee_v1_apim_service_extension_extension import (
    GoogleCloudApigeeV1ApimServiceExtensionExtension,
    GoogleCloudApigeeV1ApimServiceExtensionExtensionDict,
)
from .google_cloud_apigee_v1_apim_service_extension_network_config import (
    GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig,
    GoogleCloudApigeeV1ApimServiceExtensionNetworkConfigDict,
)


class GoogleCloudApigeeV1ApimServiceExtension(SdkBaseModel):
    """APIM Service Extension is a resource under an Apigee Organization that is used to create APIM Service Extension
    to route traffic to existing X instances."""

    name: Optional[str] = UNSET
    """Identifier. unique name of the APIM service extension. The name must conform with RFC-1034, is restricted to
    lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first
    character must be a letter and the last a letter or a number."""

    network_configs: Optional[list[GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig]] = Field(
        default=UNSET, alias="networkConfigs"
    )
    """Required. List of network configurations for the APIM service extension."""

    extensions: Optional[list[GoogleCloudApigeeV1ApimServiceExtensionExtension]] = UNSET
    """Optional. List of extensions that are part of the service extension. Refer to
    https://cloud.google.com/service-extensions/docs/quotas#limits for any limits."""

    network: Optional[str] = UNSET
    """Required. The network where the forwarding rule is created. Format:
    projects/{project}/global/networks/{network}"""

    state: Optional[State12OrStr] = UNSET
    """Output only. State of the APIM service extension. Values other than ``ACTIVE`` mean the resource is not ready to
    use."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time that this resource was updated on the server."""

    extension_processor: Optional[str] = Field(default=UNSET, alias="extensionProcessor")
    """Required. Name of the proxy deployed in the Apigee X instance."""

    lb_forwarding_rule: Optional[str] = Field(default=UNSET, alias="lbForwardingRule")
    """Required. Name of the Google Cloud LB forwarding rule. Format:
    projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}
    projects/{project}/global/forwardingRules/{forwarding_rule}"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time that this resource was created on the server."""


class GoogleCloudApigeeV1ApimServiceExtensionDict(TypedDict):
    name: NotRequired[str]
    network_configs: NotRequired[list[GoogleCloudApigeeV1ApimServiceExtensionNetworkConfigDict]]
    extensions: NotRequired[list[GoogleCloudApigeeV1ApimServiceExtensionExtensionDict]]
    network: NotRequired[str]
    state: NotRequired[State12OrStr]
    update_time: NotRequired[str]
    extension_processor: NotRequired[str]
    lb_forwarding_rule: NotRequired[str]
    create_time: NotRequired[str]
