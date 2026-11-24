from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.peering_cidr_range import PeeringCidrRangeOrStr
from .enums.state4 import State4OrStr
from .google_cloud_apigee_v1_access_logging_config2 import (
    GoogleCloudApigeeV1AccessLoggingConfig2,
    GoogleCloudApigeeV1AccessLoggingConfig2Dict,
)
from .google_cloud_apigee_v1_maintenance_update_policy2 import (
    GoogleCloudApigeeV1MaintenanceUpdatePolicy2,
    GoogleCloudApigeeV1MaintenanceUpdatePolicy2Dict,
)
from .google_cloud_apigee_v1_scheduled_maintenance2 import (
    GoogleCloudApigeeV1ScheduledMaintenance2,
    GoogleCloudApigeeV1ScheduledMaintenance2Dict,
)


class GoogleCloudApigeeV1Instance(SdkBaseModel):
    """Apigee runtime instance."""

    state: Optional[State4OrStr] = UNSET
    """Output only. State of the instance. Values other than ``ACTIVE`` means the resource is not ready to use."""

    location: Optional[str] = UNSET
    """Required. Compute Engine location where the instance resides."""

    port: Optional[str] = UNSET
    """Output only. Port number of the exposed Apigee endpoint."""

    description: Optional[str] = UNSET
    """Optional. Description of the instance."""

    ip_range: Optional[str] = Field(default=UNSET, alias="ipRange")
    """Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance.
    Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should
    be freely available as part of a larger named range you have allocated to the Service Networking peering. If this
    parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service
    Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats:
    ``a.b.c.d/22`` or ``e.f.g.h/28`` or ``a.b.c.d/22,e.f.g.h/28``"""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time the instance was last modified in milliseconds since epoch."""

    is_version_locked: Optional[bool] = Field(default=UNSET, alias="isVersionLocked")
    """Output only. Indicates whether the instance is version locked. If true, the instance will not be updated by
    automated runtime rollouts. This is only supported for Apigee X instances."""

    service_attachment: Optional[str] = Field(default=UNSET, alias="serviceAttachment")
    """Output only. Resource name of the service attachment created for the instance in the format:
    ``projects/*/regions/*/serviceAttachments/*`` Apigee customers can privately forward traffic to this service
    attachment using the PSC endpoints."""

    consumer_accept_list: Optional[list[str]] = Field(default=UNSET, alias="consumerAcceptList")
    """Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately
    connect to the service attachment. It is an optional field which the customers can provide during the instance
    creation. By default, the customer project associated with the Apigee organization will be included to the list."""

    host: Optional[str] = UNSET
    """Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service."""

    disk_encryption_key_name: Optional[str] = Field(default=UNSET, alias="diskEncryptionKeyName")
    """Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a
    Google-Managed encryption key will be used. Use the following format:
    ``projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)``"""

    name: Optional[str] = UNSET
    r"""Required. Resource ID of the instance. Values must match the regular expression ``^a-z{0,30}[a-z\d]$``."""

    access_logging_config: Optional[GoogleCloudApigeeV1AccessLoggingConfig2] = Field(
        default=UNSET, alias="accessLoggingConfig"
    )
    """Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can
    enable access logging to ship the access logs to their own project's cloud logging."""

    scheduled_maintenance: Optional[GoogleCloudApigeeV1ScheduledMaintenance2] = Field(
        default=UNSET, alias="scheduledMaintenance"
    )
    """Output only. Time and date of the scheduled maintenance for this instance. This field is only populated for
    instances that have opted into Maintenance Window and if there is an upcoming maintenance. Cleared once the
    maintenance is complete."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name for the instance."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time the instance was created in milliseconds since epoch."""

    peering_cidr_range: Optional[PeeringCidrRangeOrStr] = Field(default=UNSET, alias="peeringCidrRange")
    """Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support
    ``SLASH_16`` to ``SLASH_20`` and defaults to ``SLASH_16``. Evaluation organizations support only ``SLASH_23``."""

    maintenance_update_policy: Optional[GoogleCloudApigeeV1MaintenanceUpdatePolicy2] = Field(
        default=UNSET, alias="maintenanceUpdatePolicy"
    )
    """Optional. Apigee customers can set the preferred window to perform maintenance on the instance (day of the week
    and time of day)."""

    runtime_version: Optional[str] = Field(default=UNSET, alias="runtimeVersion")
    """Output only. Version of the runtime system running in the instance. The runtime system is the set of components
    that serve the API Proxy traffic in your Environments."""


class GoogleCloudApigeeV1InstanceDict(TypedDict):
    state: NotRequired[State4OrStr]
    location: NotRequired[str]
    port: NotRequired[str]
    description: NotRequired[str]
    ip_range: NotRequired[str]
    last_modified_at: NotRequired[str]
    is_version_locked: NotRequired[bool]
    service_attachment: NotRequired[str]
    consumer_accept_list: NotRequired[list[str]]
    host: NotRequired[str]
    disk_encryption_key_name: NotRequired[str]
    name: NotRequired[str]
    access_logging_config: NotRequired[GoogleCloudApigeeV1AccessLoggingConfig2Dict]
    scheduled_maintenance: NotRequired[GoogleCloudApigeeV1ScheduledMaintenance2Dict]
    display_name: NotRequired[str]
    created_at: NotRequired[str]
    peering_cidr_range: NotRequired[PeeringCidrRangeOrStr]
    maintenance_update_policy: NotRequired[GoogleCloudApigeeV1MaintenanceUpdatePolicy2Dict]
    runtime_version: NotRequired[str]
