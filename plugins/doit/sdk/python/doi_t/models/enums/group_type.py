from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GroupType(str, Enum):
    """Group type."""

    ACCOUNT = "account"
    AZ = "az"
    AZURE_SUBSCRIPTION = "azure_subscription"
    CUSTOMER_GATEWAY = "customer_gateway"
    ECS = "ecs"
    EKS = "eks"
    AKS = "aks"
    K8S_NAMESPACE = "k8s_namespace"
    K8S_POD = "k8s_pod"
    K8S_DEPLOYMENT = "k8s_deployment"
    K8S_DAEMON_SET = "k8s_daemon_set"
    K8S_REPLICA_SET = "k8s_replica_set"
    K8S_STATEFUL_SET = "k8s_stateful_set"
    PROJECT = "project"
    REGION = "region"
    SECURITY_GROUP = "security_group"
    SUBNET = "subnet"
    VPC = "vpc"
    GCP_INSTANCE_GROUP = "gcp_instance_group"
    GCP_MANAGED_ZONE = "gcp_managed_zone"
    GKE_CLUSTER = "gke_cluster"
    AZURE_DNS_ZONE = "azure_dns_zone"
    AZURE_CDN_PROFILE = "azure_cdn_profile"
    AZURE_RESOURCE_GROUP = "azure_resource_group"

    __str__ = str.__str__


GroupTypeOrStr: TypeAlias = Annotated[GroupType | str, open_enum_validator(GroupType)]
