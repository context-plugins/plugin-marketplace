from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResizeNodeGroupRequest(SdkBaseModel):
    """A request to resize a node group."""

    graceful_decommission_timeout: Optional[str] = Field(default=UNSET, alias="gracefulDecommissionTimeout")
    """Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning)
    allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout
    specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially
    interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see
    JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on
    Dataproc image versions 1.2 and higher."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest
    (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests)
    with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the
    backend is returned.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    parent_operation_id: Optional[str] = Field(default=UNSET, alias="parentOperationId")
    """Optional. operation id of the parent operation sending the resize request"""

    size: Optional[int] = UNSET
    """Required. The number of running instances for the node group to maintain. The group adds or removes instances to
    maintain the number of instances specified by this parameter."""


class ResizeNodeGroupRequestDict(TypedDict):
    graceful_decommission_timeout: NotRequired[str]
    request_id: NotRequired[str]
    parent_operation_id: NotRequired[str]
    size: NotRequired[int]
