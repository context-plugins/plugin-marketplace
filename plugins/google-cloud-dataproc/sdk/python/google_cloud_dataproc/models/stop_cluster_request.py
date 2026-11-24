from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StopClusterRequest(SdkBaseModel):
    """A request to stop a cluster."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the server receives two StopClusterRequest
    (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StopClusterRequest)s
    with the same id, then the second request will be ignored and the first google.longrunning.Operation created and
    stored in the backend is returned.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    cluster_uuid: Optional[str] = Field(default=UNSET, alias="clusterUuid")
    """Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the
    specified UUID does not exist."""


class StopClusterRequestDict(TypedDict):
    request_id: NotRequired[str]
    cluster_uuid: NotRequired[str]
