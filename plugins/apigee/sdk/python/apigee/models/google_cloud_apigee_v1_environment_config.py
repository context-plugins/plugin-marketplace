from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_data_collector_config import (
    GoogleCloudApigeeV1DataCollectorConfig,
    GoogleCloudApigeeV1DataCollectorConfigDict,
)
from .google_cloud_apigee_v1_debug_mask1 import GoogleCloudApigeeV1DebugMask1, GoogleCloudApigeeV1DebugMask1Dict
from .google_cloud_apigee_v1_deployment_config import (
    GoogleCloudApigeeV1DeploymentConfig,
    GoogleCloudApigeeV1DeploymentConfigDict,
)
from .google_cloud_apigee_v1_deployment_group_config import (
    GoogleCloudApigeeV1DeploymentGroupConfig,
    GoogleCloudApigeeV1DeploymentGroupConfigDict,
)
from .google_cloud_apigee_v1_environment_config_client_ip_resolution_config1 import (
    GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1,
    GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1Dict,
)
from .google_cloud_apigee_v1_flow_hook_config import (
    GoogleCloudApigeeV1FlowHookConfig,
    GoogleCloudApigeeV1FlowHookConfigDict,
)
from .google_cloud_apigee_v1_keystore_config import (
    GoogleCloudApigeeV1KeystoreConfig,
    GoogleCloudApigeeV1KeystoreConfigDict,
)
from .google_cloud_apigee_v1_reference_config import (
    GoogleCloudApigeeV1ReferenceConfig,
    GoogleCloudApigeeV1ReferenceConfigDict,
)
from .google_cloud_apigee_v1_resource_config import (
    GoogleCloudApigeeV1ResourceConfig,
    GoogleCloudApigeeV1ResourceConfigDict,
)
from .google_cloud_apigee_v1_runtime_addons_config1 import (
    GoogleCloudApigeeV1RuntimeAddonsConfig1,
    GoogleCloudApigeeV1RuntimeAddonsConfig1Dict,
)
from .google_cloud_apigee_v1_runtime_trace_config1 import (
    GoogleCloudApigeeV1RuntimeTraceConfig1,
    GoogleCloudApigeeV1RuntimeTraceConfig1Dict,
)
from .google_cloud_apigee_v1_target_server_config import (
    GoogleCloudApigeeV1TargetServerConfig,
    GoogleCloudApigeeV1TargetServerConfigDict,
)


class GoogleCloudApigeeV1EnvironmentConfig(SdkBaseModel):
    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision ID of the environment configuration. The higher the value, the more recently the configuration was
    deployed."""

    flowhooks: Optional[list[GoogleCloudApigeeV1FlowHookConfig]] = UNSET
    """List of flow hooks in the environment."""

    gateway_config_location: Optional[str] = Field(default=UNSET, alias="gatewayConfigLocation")
    """The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based
    gateways."""

    pubsub_topic: Optional[str] = Field(default=UNSET, alias="pubsubTopic")
    """Name of the PubSub topic for the environment."""

    name: Optional[str] = UNSET
    """Name of the environment configuration in the following format:
    ``organizations/{org}/environments/{env}/configs/{config}``"""

    addons_config: Optional[GoogleCloudApigeeV1RuntimeAddonsConfig1] = Field(default=UNSET, alias="addonsConfig")
    """The latest runtime configurations for add-ons."""

    arc_config_location: Optional[str] = Field(default=UNSET, alias="arcConfigLocation")
    """The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI,
    e.g. a Cloud Storage URI. This is only used by Envoy-based gateways."""

    deployments: Optional[list[GoogleCloudApigeeV1DeploymentConfig]] = UNSET
    """List of deployments in the environment."""

    uid: Optional[str] = UNSET
    """Unique ID for the environment configuration. The ID will only change if the environment is deleted and
    recreated."""

    resource_references: Optional[list[GoogleCloudApigeeV1ReferenceConfig]] = Field(
        default=UNSET, alias="resourceReferences"
    )
    """List of resource references in the environment."""

    deployment_groups: Optional[list[GoogleCloudApigeeV1DeploymentGroupConfig]] = Field(
        default=UNSET, alias="deploymentGroups"
    )
    """List of deployment groups in the environment."""

    debug_mask: Optional[GoogleCloudApigeeV1DebugMask1] = Field(default=UNSET, alias="debugMask")
    """Debug mask that applies to all deployments in the environment."""

    keystores: Optional[list[GoogleCloudApigeeV1KeystoreConfig]] = UNSET
    """List of keystores in the environment."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Time that the environment configuration was created."""

    provider: Optional[str] = UNSET
    """Used by the Control plane to add context information to help detect the source of the document during diagnostics
    and debugging."""

    env_scoped_revision_id: Optional[str] = Field(default=UNSET, alias="envScopedRevisionId")
    """Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will
    increment any time a resource not scoped to a deployment group changes."""

    client_ip_resolution_config: Optional[GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1] = Field(
        default=UNSET, alias="clientIpResolutionConfig"
    )
    """The algorithm to resolve IP."""

    sequence_number: Optional[str] = Field(default=UNSET, alias="sequenceNumber")
    """DEPRECATED: Use revision_id."""

    data_collectors: Optional[list[GoogleCloudApigeeV1DataCollectorConfig]] = Field(
        default=UNSET, alias="dataCollectors"
    )
    """List of data collectors used by the deployments in the environment."""

    trace_config: Optional[GoogleCloudApigeeV1RuntimeTraceConfig1] = Field(default=UNSET, alias="traceConfig")
    """Trace configurations. Contains config for the environment and config overrides for specific API proxies."""

    resources: Optional[list[GoogleCloudApigeeV1ResourceConfig]] = UNSET
    """List of resource versions in the environment."""

    targets: Optional[list[GoogleCloudApigeeV1TargetServerConfig]] = UNSET
    """List of target servers in the environment. Disabled target servers are not displayed."""

    forward_proxy_uri: Optional[str] = Field(default=UNSET, alias="forwardProxyUri")
    """The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the
    given forward proxy. This is only used by programmable gateways."""

    feature_flags: Optional[dict[str, str]] = Field(default=UNSET, alias="featureFlags")
    """Feature flags inherited from the organization and environment."""


class GoogleCloudApigeeV1EnvironmentConfigDict(TypedDict):
    revision_id: NotRequired[str]
    flowhooks: NotRequired[list[GoogleCloudApigeeV1FlowHookConfigDict]]
    gateway_config_location: NotRequired[str]
    pubsub_topic: NotRequired[str]
    name: NotRequired[str]
    addons_config: NotRequired[GoogleCloudApigeeV1RuntimeAddonsConfig1Dict]
    arc_config_location: NotRequired[str]
    deployments: NotRequired[list[GoogleCloudApigeeV1DeploymentConfigDict]]
    uid: NotRequired[str]
    resource_references: NotRequired[list[GoogleCloudApigeeV1ReferenceConfigDict]]
    deployment_groups: NotRequired[list[GoogleCloudApigeeV1DeploymentGroupConfigDict]]
    debug_mask: NotRequired[GoogleCloudApigeeV1DebugMask1Dict]
    keystores: NotRequired[list[GoogleCloudApigeeV1KeystoreConfigDict]]
    create_time: NotRequired[str]
    provider: NotRequired[str]
    env_scoped_revision_id: NotRequired[str]
    client_ip_resolution_config: NotRequired[GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1Dict]
    sequence_number: NotRequired[str]
    data_collectors: NotRequired[list[GoogleCloudApigeeV1DataCollectorConfigDict]]
    trace_config: NotRequired[GoogleCloudApigeeV1RuntimeTraceConfig1Dict]
    resources: NotRequired[list[GoogleCloudApigeeV1ResourceConfigDict]]
    targets: NotRequired[list[GoogleCloudApigeeV1TargetServerConfigDict]]
    forward_proxy_uri: NotRequired[str]
    feature_flags: NotRequired[dict[str, str]]
