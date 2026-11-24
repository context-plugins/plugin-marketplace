import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  confidentialInstanceConfig2Schema,
  type ConfidentialInstanceConfig2,
} from "./confidential-instance-config2.js";
import { multiZoneConfig2Schema, type MultiZoneConfig2 } from "./multi-zone-config2.js";
import { nodeGroupAffinity2Schema, type NodeGroupAffinity2 } from "./node-group-affinity2.js";
import { privateIpv6GoogleAccessSchema, type PrivateIpv6GoogleAccess } from "./private-ipv6-google-access.js";
import { reservationAffinity2Schema, type ReservationAffinity2 } from "./reservation-affinity2.js";
import { shieldedInstanceConfig2Schema, type ShieldedInstanceConfig2 } from "./shielded-instance-config2.js";

/**
 * Common config settings for resources of Compute Engine cluster instances, applicable to all
 * instances in the cluster.
 */
export type GceClusterConfig = {
  /**
   * Optional. The Compute Engine zone where the cluster will be located. If omitted, the service
   * will pick a zone in the cluster's Compute Engine region. On a get request, zone will always be
   * present.A full URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
   * projects/[project_id]/zones/[zone] [zone]
   */
  zoneUri?: string;
  /**
   * Optional. The URIs of service account scopes to be included in Compute Engine instances. The
   * following base set of scopes is always included:
   * https://www.googleapis.com/auth/cloud.useraccounts.readonly
   * https://www.googleapis.com/auth/devstorage.read_write
   * https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults
   * are also provided: https://www.googleapis.com/auth/bigquery
   * https://www.googleapis.com/auth/bigtable.admin.table
   * https://www.googleapis.com/auth/bigtable.data
   * https://www.googleapis.com/auth/devstorage.full_control
   */
  serviceAccountScopes?: string[];
  /**
   * Optional. Confidential Instance Config for clusters using Confidential VMs
   * (https://cloud.google.com/confidential-computing/confidential-vm/docs).
   */
  confidentialInstanceConfig?: ConfidentialInstanceConfig2;
  /**
   * Optional. The Compute Engine network to be used for machine communications. Cannot be specified
   * with subnetwork_uri. If neither network_uri nor subnetwork_uri is specified, the "default"
   * network of the project is used, if it exists. Cannot be a Custom Subnet Network (see Using
   * Subnetworks (https://cloud.google.com/compute/docs/subnetworks) for more information).A full
   * URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default
   * projects/[project_id]/global/networks/default default
   */
  networkUri?: string;
  /**
   * The Compute Engine network tags to add to all instances (see Tagging instances
   * (https://cloud.google.com/vpc/docs/add-remove-network-tags)).
   */
  tags?: string[];
  /** Optional. Node Group Affinity for sole-tenant clusters. */
  nodeGroupAffinity?: NodeGroupAffinity2;
  /**
   * Optional. Controls how instances within this Cluster are allowed to exist in multiple Zones
   * within the Region. Only one of zone_uri or multi_zone_config must be set.
   */
  multiZoneConfig?: MultiZoneConfig2;
  /**
   * Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs
   * (https://cloud.google.com/security/shielded-cloud/shielded-vm).
   */
  shieldedInstanceConfig?: ShieldedInstanceConfig2;
  /**
   * Optional. The VM service account
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#service_accounts_in_dataproc)
   * (also see VM Data Plane identity
   * (https://cloud.google.com/dataproc/docs/concepts/iam/dataproc-principals#vm_service_account_data_plane_identity))
   * used by cluster VM instances to access Google Cloud Platform services.If not specified, the
   * Compute Engine default service account
   * (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is
   * used.
   */
  serviceAccount?: string;
  /**
   * Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be
   * specified with network_uri.A full URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/[region]/subnetworks/sub0
   * projects/[project_id]/regions/[region]/subnetworks/sub0 sub0
   */
  subnetworkUri?: string;
  /** Optional. Reservation Affinity for consuming Zonal reservation. */
  reservationAffinity?: ReservationAffinity2;
  /**
   * Optional. Resource manager tags
   * (https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing) to add to all
   * instances (see Use secure tags
   * (https://cloud.google.com/dataproc/docs/guides/use-secure-tags)).
   */
  resourceManagerTags?: Record<string, string>;
  /**
   * Optional. The Compute Engine metadata entries to add to all instances (see Project and instance
   * metadata
   * (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
   */
  metadata?: Record<string, string>;
  /**
   * Optional. An optional list of Compute Engine zones where the cluster will not be located when
   * Auto Zone is enabled. Only one of zone_uri or auto_zone_exclude_zone_uris can be set. If both
   * are omitted, the service will pick a zone in the cluster Compute Engine region. If
   * auto_zone_exclude_zone_uris is set and there is more than one non-excluded zone, the service
   * will pick one of the non-excluded zones. Otherwise, cluster creation will fail with
   * INVALID_ARGUMENT error.A full URL, partial URI, or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
   * projects/[project_id]/zones/[zone] [zone]
   */
  autoZoneExcludeZoneUris?: string[];
  /**
   * Optional. This setting applies to subnetwork-enabled networks. It is set to true by default in
   * clusters created with image versions 2.2.x.When set to true: All cluster VMs have internal IP
   * addresses. Google Private Access (https://cloud.google.com/vpc/docs/private-google-access) must
   * be enabled to access the Dataproc API and other Google Cloud APIs. Off-cluster dependencies
   * must be configured to be accessible without external IP addresses.When set to false: Cluster
   * VMs are not restricted to internal IP addresses. Ephemeral external IP addresses are assigned
   * to each cluster VM.
   */
  internalIpOnly?: boolean;
  /** Optional. The type of IPv6 access for a cluster. */
  privateIpv6GoogleAccess?: PrivateIpv6GoogleAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gceClusterConfigSchema: Schema<GceClusterConfig> = s.object<GceClusterConfig>(
  {
    zoneUri: s.optional(s.string()),
    serviceAccountScopes: s.optional(s.array(s.string())),
    confidentialInstanceConfig: s.optional(s.lazy(() => confidentialInstanceConfig2Schema)),
    networkUri: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    nodeGroupAffinity: s.optional(s.lazy(() => nodeGroupAffinity2Schema)),
    multiZoneConfig: s.optional(s.lazy(() => multiZoneConfig2Schema)),
    shieldedInstanceConfig: s.optional(s.lazy(() => shieldedInstanceConfig2Schema)),
    serviceAccount: s.optional(s.string()),
    subnetworkUri: s.optional(s.string()),
    reservationAffinity: s.optional(s.lazy(() => reservationAffinity2Schema)),
    resourceManagerTags: s.optional(s.record(s.string(), s.string())),
    metadata: s.optional(s.record(s.string(), s.string())),
    autoZoneExcludeZoneUris: s.optional(s.array(s.string())),
    internalIpOnly: s.optional(s.boolean()),
    privateIpv6GoogleAccess: s.optional(s.lazy(() => privateIpv6GoogleAccessSchema)),
  },
  { additionalProperties: s.json() },
);
