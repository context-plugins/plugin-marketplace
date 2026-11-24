from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.api_proxy_type1 import ApiProxyType1OrStr
from .enums.deployment_type import DeploymentTypeOrStr
from .enums.state9 import State9OrStr
from .enums.type7 import Type7OrStr
from .google_cloud_apigee_v1_environment_client_ip_resolution_config2 import (
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2,
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2Dict,
)
from .google_cloud_apigee_v1_node_config2 import GoogleCloudApigeeV1NodeConfig2, GoogleCloudApigeeV1NodeConfig2Dict
from .google_cloud_apigee_v1_properties3 import GoogleCloudApigeeV1Properties3, GoogleCloudApigeeV1Properties3Dict


class GoogleCloudApigeeV1Environment(SdkBaseModel):
    properties: Optional[GoogleCloudApigeeV1Properties3] = UNSET
    """Optional. Key-value pairs that may be used for customizing the environment."""

    forward_proxy_uri: Optional[str] = Field(default=UNSET, alias="forwardProxyUri")
    """Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the
    format of {scheme}://{hostname}:{port}. Note that the only supported scheme is "http". The port must be supplied. To
    remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add
    forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the
    forwardProxyUri setting in this case, include the NodeConfig details with the request."""

    node_config: Optional[GoogleCloudApigeeV1NodeConfig2] = Field(default=UNSET, alias="nodeConfig")
    """Optional. NodeConfig of the environment."""

    description: Optional[str] = UNSET
    """Optional. Description of the environment."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Creation time of this environment as milliseconds since epoch."""

    api_proxy_type: Optional[ApiProxyType1OrStr] = Field(default=UNSET, alias="apiProxyType")
    """Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and
    cannot be changed."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name for this environment."""

    name: Optional[str] = UNSET
    r"""Required. Name of the environment. Values must match the regular expression ``^[.\\p{Alnum}-_]{1,255}$``"""

    state: Optional[State9OrStr] = UNSET
    """Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use."""

    client_ip_resolution_config: Optional[GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2] = Field(
        default=UNSET, alias="clientIpResolutionConfig"
    )
    """Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other features that use the
    client ip. To remove a client ip resolution config, update the field to an empty value. Example: '{
    "clientIpResolutionConfig" = {} }' For more information, see:
    https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution."""

    has_attached_flow_hooks: Optional[bool] = Field(default=UNSET, alias="hasAttachedFlowHooks")
    type_: Optional[Type7OrStr] = Field(default=UNSET, alias="type")
    """Optional. EnvironmentType selected for the environment."""

    deployment_type: Optional[DeploymentTypeOrStr] = Field(default=UNSET, alias="deploymentType")
    """Optional. Deployment type supported by the environment. The deployment type can be set when creating the
    environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a
    `subset of actions </apigee/docs/api-platform/local-development/overview#prevented-actions>`__ within the
    environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or
    deleting resource files * Creating, updating, or deleting target servers"""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Last modification time of this environment as milliseconds since epoch."""


class GoogleCloudApigeeV1EnvironmentDict(TypedDict):
    properties: NotRequired[GoogleCloudApigeeV1Properties3Dict]
    forward_proxy_uri: NotRequired[str]
    node_config: NotRequired[GoogleCloudApigeeV1NodeConfig2Dict]
    description: NotRequired[str]
    created_at: NotRequired[str]
    api_proxy_type: NotRequired[ApiProxyType1OrStr]
    display_name: NotRequired[str]
    name: NotRequired[str]
    state: NotRequired[State9OrStr]
    client_ip_resolution_config: NotRequired[GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2Dict]
    has_attached_flow_hooks: NotRequired[bool]
    type_: NotRequired[Type7OrStr]
    deployment_type: NotRequired[DeploymentTypeOrStr]
    last_modified_at: NotRequired[str]
