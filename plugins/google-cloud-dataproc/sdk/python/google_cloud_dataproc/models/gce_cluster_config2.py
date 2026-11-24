from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .confidential_instance_config2 import ConfidentialInstanceConfig2, ConfidentialInstanceConfig2Dict
from .enums.private_ipv6_google_access import PrivateIpv6GoogleAccessOrStr
from .multi_zone_config2 import MultiZoneConfig2, MultiZoneConfig2Dict
from .node_group_affinity2 import NodeGroupAffinity2, NodeGroupAffinity2Dict
from .reservation_affinity2 import ReservationAffinity2, ReservationAffinity2Dict
from .shielded_instance_config2 import ShieldedInstanceConfig2, ShieldedInstanceConfig2Dict


class GceClusterConfig2(SdkBaseModel):
    """Optional. The shared Compute Engine config settings for all instances in a cluster."""

    zone_uri: Optional[str] = Field(default=UNSET, alias="zoneUri")
    """Optional. The Compute Engine zone where the cluster will be located. If omitted, the service will pick a zone in
    the cluster's Compute Engine region. On a get request, zone will always be present.A full URL, partial URI, or short
    name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
    projects/[project_id]/zones/[zone] [zone]"""

    service_account_scopes: Optional[list[str]] = Field(default=UNSET, alias="serviceAccountScopes")
    """Optional. The URIs of service account scopes to be included in Compute Engine instances. The following base set
    of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly
    https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/logging.writeIf no scopes are
    specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery
    https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data
    https://www.googleapis.com/auth/devstorage.full_control"""

    confidential_instance_config: Optional[ConfidentialInstanceConfig2] = Field(
        default=UNSET, alias="confidentialInstanceConfig"
    )
    """Optional. Confidential Instance Config for clusters using Confidential VMs
    (https://cloud.google.com/confidential-computing/confidential-vm/docs)."""

    network_uri: Optional[str] = Field(default=UNSET, alias="networkUri")
    """Optional. The Compute Engine network to be used for machine communications. Cannot be specified with
    subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default" network of the project is
    used, if it exists. Cannot be a Custom Subnet Network (see Using Subnetworks
    (https://cloud.google.com/compute/docs/subnetworks) for more information).A full URL, partial URI, or short name are
    valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default
    projects/[project_id]/global/networks/default default"""

    tags: Optional[list[str]] = UNSET
    """The Compute Engine network tags to add to all instances (see Tagging instances
    (https://cloud.google.com/vpc/docs/add-remove-network-tags))."""

    node_group_affinity: Optional[NodeGroupAffinity2] = Field(default=UNSET, alias="nodeGroupAffinity")
    """Optional. Node Group Affinity for sole-tenant clusters."""

    multi_zone_config: Optional[MultiZoneConfig2] = Field(default=UNSET, alias="multiZoneConfig")
    """Optional. Controls how instances within this Cluster are allowed to exist in multiple Zones within the Region.
    Only one of zone_uri or multi_zone_config must be set."""

    shielded_instance_config: Optional[ShieldedInstanceConfig2] = Field(default=UNSET, alias="shieldedInstanceConfig")
    """Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs
    (https://cloud.google.com/security/shielded-cloud/shielded-vm)."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. The VM service account
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc)
    (also see VM Data Plane identity
    (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity))
    used by cluster VM instances to access Google Cloud Platform services.If not specified, the Compute Engine default
    service account (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used."""

    subnetwork_uri: Optional[str] = Field(default=UNSET, alias="subnetworkUri")
    """Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with
    network_uri.A full URL, partial URI, or short name are valid. Examples:
    https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0
    projects/[project_id]/regions/[region]/subnetworks/sub0 sub0"""

    reservation_affinity: Optional[ReservationAffinity2] = Field(default=UNSET, alias="reservationAffinity")
    """Optional. Reservation Affinity for consuming Zonal reservation."""

    resource_manager_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="resourceManagerTags")
    """Optional. Resource manager tags (https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
    to add to all instances (see Use secure tags (https://cloud.google.com/dataproc/docs/guides/use-secure-tags))."""

    metadata: Optional[dict[str, str]] = UNSET
    """Optional. The Compute Engine metadata entries to add to all instances (see Project and instance metadata
    (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata))."""

    auto_zone_exclude_zone_uris: Optional[list[str]] = Field(default=UNSET, alias="autoZoneExcludeZoneUris")
    """Optional. An optional list of Compute Engine zones where the cluster will not be located when Auto Zone is
    enabled. Only one of zone_uri or auto_zone_exclude_zone_uris can be set. If both are omitted, the service will pick
    a zone in the cluster Compute Engine region. If auto_zone_exclude_zone_uris is set and there is more than one
    non-excluded zone, the service will pick one of the non-excluded zones. Otherwise, cluster creation will fail with
    INVALID_ARGUMENT error.A full URL, partial URI, or short name are valid. Examples:
    https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone] projects/[project_id]/zones/[zone]
    [zone]"""

    internal_ip_only: Optional[bool] = Field(default=UNSET, alias="internalIpOnly")
    """Optional. This setting applies to subnetwork-enabled networks. It is set to true by default in clusters created
    with image versions 2.2.x.When set to true: All cluster VMs have internal IP addresses. Google Private Access
    (https://cloud.google.com/vpc/docs/private-google-access) must be enabled to access the Dataproc API and other
    Google Cloud APIs. Off-cluster dependencies must be configured to be accessible without external IP addresses.When
    set to false: Cluster VMs are not restricted to internal IP addresses. Ephemeral external IP addresses are assigned
    to each cluster VM."""

    private_ipv6_google_access: Optional[PrivateIpv6GoogleAccessOrStr] = Field(
        default=UNSET, alias="privateIpv6GoogleAccess"
    )
    """Optional. The type of IPv6 access for a cluster."""


class GceClusterConfig2Dict(TypedDict):
    zone_uri: NotRequired[str]
    service_account_scopes: NotRequired[list[str]]
    confidential_instance_config: NotRequired[ConfidentialInstanceConfig2Dict]
    network_uri: NotRequired[str]
    tags: NotRequired[list[str]]
    node_group_affinity: NotRequired[NodeGroupAffinity2Dict]
    multi_zone_config: NotRequired[MultiZoneConfig2Dict]
    shielded_instance_config: NotRequired[ShieldedInstanceConfig2Dict]
    service_account: NotRequired[str]
    subnetwork_uri: NotRequired[str]
    reservation_affinity: NotRequired[ReservationAffinity2Dict]
    resource_manager_tags: NotRequired[dict[str, str]]
    metadata: NotRequired[dict[str, str]]
    auto_zone_exclude_zone_uris: NotRequired[list[str]]
    internal_ip_only: NotRequired[bool]
    private_ipv6_google_access: NotRequired[PrivateIpv6GoogleAccessOrStr]
