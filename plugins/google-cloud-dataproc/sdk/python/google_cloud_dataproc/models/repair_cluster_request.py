from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cluster_to_repair2 import ClusterToRepair2, ClusterToRepair2Dict
from .node_pool import NodePool, NodePoolDict


class RepairClusterRequest(SdkBaseModel):
    """A request to repair a cluster."""

    cluster: Optional[ClusterToRepair2] = UNSET
    """Optional. Cluster to be repaired"""

    dataproc_super_user: Optional[bool] = Field(default=UNSET, alias="dataprocSuperUser")
    """Optional. Whether the request is submitted by a super user. If true, IAM will check 'dataproc.clusters.repair'
    permission instead of 'dataproc.clusters.update' permission. This is to give Dataproc superuser the ability to
    repair clusters without granting the overly broad update permission."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the
    same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend
    is returned.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    node_pools: Optional[list[NodePool]] = Field(default=UNSET, alias="nodePools")
    """Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this
    request. i.e. Multiple entries for the same node pool id are not allowed."""

    cluster_uuid: Optional[str] = Field(default=UNSET, alias="clusterUuid")
    """Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the
    specified UUID does not exist."""

    graceful_decommission_timeout: Optional[str] = Field(default=UNSET, alias="gracefulDecommissionTimeout")
    """Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster
    nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before
    forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is
    1 day. (see JSON Mapping—Duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in
    image versions 1.2+."""

    parent_operation_id: Optional[str] = Field(default=UNSET, alias="parentOperationId")
    """Optional. operation id of the parent operation sending the repair request"""


class RepairClusterRequestDict(TypedDict):
    cluster: NotRequired[ClusterToRepair2Dict]
    dataproc_super_user: NotRequired[bool]
    request_id: NotRequired[str]
    node_pools: NotRequired[list[NodePoolDict]]
    cluster_uuid: NotRequired[str]
    graceful_decommission_timeout: NotRequired[str]
    parent_operation_id: NotRequired[str]
