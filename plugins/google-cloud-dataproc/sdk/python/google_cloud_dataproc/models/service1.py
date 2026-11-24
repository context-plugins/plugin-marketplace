from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_config22 import EncryptionConfig22, EncryptionConfig22Dict
from .enums.database_type import DatabaseTypeOrStr
from .enums.release_channel import ReleaseChannelOrStr
from .enums.state11 import State11OrStr
from .enums.tier import TierOrStr
from .hive_metastore_config2 import HiveMetastoreConfig2, HiveMetastoreConfig2Dict
from .lakehouse_proxy_config2 import LakehouseProxyConfig2, LakehouseProxyConfig2Dict
from .maintenance_window2 import MaintenanceWindow2, MaintenanceWindow2Dict
from .metadata_integration1 import MetadataIntegration1, MetadataIntegration1Dict
from .metadata_management_activity2 import MetadataManagementActivity2, MetadataManagementActivity2Dict
from .network_config3 import NetworkConfig3, NetworkConfig3Dict
from .scaling_config2 import ScalingConfig2, ScalingConfig2Dict
from .scheduled_backup2 import ScheduledBackup2, ScheduledBackup2Dict
from .telemetry_config2 import TelemetryConfig2, TelemetryConfig2Dict


class Service1(SdkBaseModel):
    """Output only. The revision of the service at the time of backup."""

    port: Optional[int] = UNSET
    """Optional. The TCP port at which the metastore service is reached. Default: 9083."""

    maintenance_window: Optional[MaintenanceWindow2] = Field(default=UNSET, alias="maintenanceWindow")
    """Optional. The one hour maintenance window of the metastore service. This specifies when the service can be
    restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER
    database type."""

    database_type: Optional[DatabaseTypeOrStr] = Field(default=UNSET, alias="databaseType")
    """Immutable. The database type that the Metastore service stores its data."""

    artifact_gcs_uri: Optional[str] = Field(default=UNSET, alias="artifactGcsUri")
    """Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore
    service are stored."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time when the metastore service was last updated."""

    tier: Optional[TierOrStr] = UNSET
    """Optional. The tier of the service."""

    metadata_integration: Optional[MetadataIntegration1] = Field(default=UNSET, alias="metadataIntegration")
    """Optional. The setting that defines how metastore metadata should be integrated with external services and
    systems."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Additional information about the current state of the metastore service, if available."""

    network_config: Optional[NetworkConfig3] = Field(default=UNSET, alias="networkConfig")
    """Optional. The configuration specifying the network settings for the Dataproc Metastore service."""

    endpoint_uri: Optional[str] = Field(default=UNSET, alias="endpointUri")
    """Output only. The URI of the endpoint used to access the metastore service."""

    release_channel: Optional[ReleaseChannelOrStr] = Field(default=UNSET, alias="releaseChannel")
    """Immutable. The release channel of the service. If unspecified, defaults to STABLE."""

    encryption_config: Optional[EncryptionConfig22] = Field(default=UNSET, alias="encryptionConfig")
    """Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot
    be updated."""

    scheduled_backup: Optional[ScheduledBackup2] = Field(default=UNSET, alias="scheduledBackup")
    """Optional. The configuration of scheduled backup for the metastore service."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the metastore service was created."""

    scaling_config: Optional[ScalingConfig2] = Field(default=UNSET, alias="scalingConfig")
    """Optional. Scaling configuration of the metastore service."""

    metadata_management_activity: Optional[MetadataManagementActivity2] = Field(
        default=UNSET, alias="metadataManagementActivity"
    )
    """Output only. The metadata management activities of the metastore service."""

    state: Optional[State11OrStr] = UNSET
    """Output only. The current state of the metastore service."""

    name: Optional[str] = UNSET
    """Immutable. Identifier. The relative resource name of the metastore service, in the following
    format:projects/{project_number}/locations/{location_id}/services/{service_id}."""

    hive_metastore_config: Optional[HiveMetastoreConfig2] = Field(default=UNSET, alias="hiveMetastoreConfig")
    """Configuration information specific to running Hive metastore software as the metastore service."""

    labels: Optional[dict[str, str]] = UNSET
    """User-defined labels for the metastore service."""

    lakehouse_proxy_config: Optional[LakehouseProxyConfig2] = Field(default=UNSET, alias="lakehouseProxyConfig")
    """Output only. The Lakehouse proxy routing configuration for the metastore service."""

    telemetry_config: Optional[TelemetryConfig2] = Field(default=UNSET, alias="telemetryConfig")
    """Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified
    defaults to JSON."""

    deletion_protection: Optional[bool] = Field(default=UNSET, alias="deletionProtection")
    """Optional. Indicates if the dataproc metastore should be protected against accidental deletions."""

    network: Optional[str] = UNSET
    """Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified
    in the following form:projects/{project_number}/global/networks/{network_id}."""

    uid: Optional[str] = UNSET
    """Output only. The globally unique resource identifier of the metastore service."""

    tags: Optional[dict[str, str]] = UNSET
    """Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment":
    "production", "123/costCenter": "marketing"
    """


class Service1Dict(TypedDict):
    port: NotRequired[int]
    maintenance_window: NotRequired[MaintenanceWindow2Dict]
    database_type: NotRequired[DatabaseTypeOrStr]
    artifact_gcs_uri: NotRequired[str]
    update_time: NotRequired[str]
    tier: NotRequired[TierOrStr]
    metadata_integration: NotRequired[MetadataIntegration1Dict]
    state_message: NotRequired[str]
    network_config: NotRequired[NetworkConfig3Dict]
    endpoint_uri: NotRequired[str]
    release_channel: NotRequired[ReleaseChannelOrStr]
    encryption_config: NotRequired[EncryptionConfig22Dict]
    scheduled_backup: NotRequired[ScheduledBackup2Dict]
    create_time: NotRequired[str]
    scaling_config: NotRequired[ScalingConfig2Dict]
    metadata_management_activity: NotRequired[MetadataManagementActivity2Dict]
    state: NotRequired[State11OrStr]
    name: NotRequired[str]
    hive_metastore_config: NotRequired[HiveMetastoreConfig2Dict]
    labels: NotRequired[dict[str, str]]
    lakehouse_proxy_config: NotRequired[LakehouseProxyConfig2Dict]
    telemetry_config: NotRequired[TelemetryConfig2Dict]
    deletion_protection: NotRequired[bool]
    network: NotRequired[str]
    uid: NotRequired[str]
    tags: NotRequired[dict[str, str]]
