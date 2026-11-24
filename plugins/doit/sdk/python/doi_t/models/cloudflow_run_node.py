from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .cloudflow_run_node_payload import CloudflowRunNodePayload, CloudflowRunNodePayloadDict
from .enums.status1_doi_t_cloud_flow_api import Status1DoiTCloudFlowApiOrStr


class CloudflowRunNode(SdkBaseModel):
    """One node's contribution to a run."""

    node_id: str = Field(alias="nodeId")
    """Node identifier, matching the node in the flow's graph."""

    name: str
    """Node display name."""

    status: Status1DoiTCloudFlowApiOrStr
    """Current node status."""

    step_number: Optional[int] = Field(default=UNSET, alias="stepNumber")
    """Position in execution order. Absent for nodes that never started."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    error: OptionalNullable[str] = UNSET
    """Failure message. Present when the node failed."""

    input: CloudflowRunNodePayload
    """What the node consumed. **Always null for non-action nodes** — see the operation description."""

    output: CloudflowRunNodePayload
    """What the node produced. Null until the node reaches a terminal status."""


class CloudflowRunNodeDict(TypedDict):
    node_id: str
    name: str
    status: Status1DoiTCloudFlowApiOrStr
    step_number: NotRequired[int]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    error: NotRequired[str | None]
    input: CloudflowRunNodePayloadDict
    output: CloudflowRunNodePayloadDict
