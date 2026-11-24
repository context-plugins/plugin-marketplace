import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Group type. */
export const GroupType = {
  Account: "account",
  Az: "az",
  AzureSubscription: "azure_subscription",
  CustomerGateway: "customer_gateway",
  Ecs: "ecs",
  Eks: "eks",
  Aks: "aks",
  K8SNamespace: "k8s_namespace",
  K8SPod: "k8s_pod",
  K8SDeployment: "k8s_deployment",
  K8SDaemonSet: "k8s_daemon_set",
  K8SReplicaSet: "k8s_replica_set",
  K8SStatefulSet: "k8s_stateful_set",
  Project: "project",
  Region: "region",
  SecurityGroup: "security_group",
  Subnet: "subnet",
  Vpc: "vpc",
  GcpInstanceGroup: "gcp_instance_group",
  GcpManagedZone: "gcp_managed_zone",
  GkeCluster: "gke_cluster",
  AzureDnsZone: "azure_dns_zone",
  AzureCdnProfile: "azure_cdn_profile",
  AzureResourceGroup: "azure_resource_group",
} as const;
export type GroupType = (typeof GroupType)[keyof typeof GroupType] | (string & {});

export const groupTypeSchema: EnumSchema<GroupType> = s.enumOf<GroupType>(GroupType);
